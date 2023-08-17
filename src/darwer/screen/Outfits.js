import { FlatList, Image, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../reduxtoolkit/CartSlice';
import { useNavigation } from '@react-navigation/native';


const Outfits = () => {

    const navigation = useNavigation();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [OldData, setOldData] = useState([]);
    const [visible, setVisible] = useState([]);
    const searchRef = useRef();
    
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                setLoading(false)
                setProducts(json);
                setOldData(json);
            }); 
    }

    const it = (ind) =>{
        console.log(ind)
    }

    const onSearch=(text) => {
        if(text == '') {
            setProducts(OldData);
        }else{
            let tempList = products.filter(item => {
                return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });
            setProducts(tempList);
        }
    };

    const dispatch = useDispatch();
    const addeditems = useSelector(state => state);
    // console.log(addeditems);
    const addItem = (item) => {
        dispatch(addCartItem(item));
    };

  return (
    <View style = {styles.container}>
        <View style={styles.searchbarcom}>
            {search == '' ? <Image style={styles.searchicon} 
            source={require('./search.png')} 
            /> : null}
            <TextInput 
            ref={searchRef}
            value={search}
            placeholder='search item here...'
            style={styles.searchbar}
            onChangeText={txt => {
                onSearch(txt);
                setSearch(txt);
            }}/>
            {search == '' ? null : (
                <TouchableOpacity 
                style={{marginRight: 15}}
                onPress={() => {
                    searchRef.current.clear();
                    onSearch("");
                    setSearch('');
                }}>

                <Image
                source={require('./close.png')}
                style = {styles.closeicon}
                />

                </TouchableOpacity>
            )}

        {addeditems.cart.length != 0 ?
        <TouchableOpacity style={styles.carticon}
        onPress={() => navigation.navigate("Cart")}>
            <Image style={styles.carticon} source={require('./cart.png')} />
            <Text style={styles.carttxt}>{addeditems.cart.length}</Text>
        </TouchableOpacity> : ''}
            
        </View>

{/* 
        <RefreshControl 
        refreshing={loading}
        onRefresh={() => {
            getData();
        }}> */}
            <FlatList 
            data={products}
            renderItem={({item, index}) => {
                return <TouchableOpacity
                onPress={() => {
                    it(item.title);
                }}>
                        <View style={styles.itemView}>
                            <Image source={{uri:item.image}} style={styles.productsimage} resizeMode="contain"/>
                            <View style = {{marginLeft: 10}}>
                                <Text style = {{fontWeight: 'bold'}}>{item.title.length > 30
                                ? item.title.substring(0, 30) + '...'
                                : item.title}</Text>
                                <Text>{item.description.length > 30
                                ? item.description.substring(0, 30) + '...'
                                : item.description}</Text>
                                <Text style={styles.price} >{item.price + " $"}</Text>
                            <TouchableOpacity style={styles.Cartbtn}
                            onPress={() => {addItem(item)}}>
                                <Text style={styles.Cartbtntxt}>Add to  cart</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                </TouchableOpacity>
            }} 
            />
        {/* </RefreshControl> */}
    </View>
  )
}

export default Outfits

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    itemView:{
        width: '90%',
        height: 115,
        paddingTop: 5,
        paddingLeft: 5,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        elevation: 5,
        borderRadius: 10
    },
    productsimage:{
        width: 100,
        height: 100
    },
    price:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 8,
        color: 'green'
    },
    searchbar:{
        width: '90%',
        height: 50,
        backgroundColor: "white",
        fontSize: 17,
    },
    searchbarcom:{
        flexDirection: 'row',
        backgroundColor: "white",
        width: "90%",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    searchicon:{
        width: 20,
        height: 20,
        marginHorizontal: 5,
        marginLeft: 5
    },
    closeicon:{
        width: 20,
        height: 20,
    },
    Cartbtn:{
        width: 100,
        height: 30,
        backgroundColor: 'green',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 2
    },
    Cartbtntxt:{
        marginTop: 5,
        color: "white",
        fontSize: 16
    },
    carttxt:{
        bottom: 32,
        left: 5,
        fontSize: 15,
        color: "white",
        backgroundColor:"#97e2e6",
        textAlign: 'center',
        borderRadius:20,
        width: 20
    },
    carticon:{
        width: 25,
        height: 25,
        right: 5
    }
})