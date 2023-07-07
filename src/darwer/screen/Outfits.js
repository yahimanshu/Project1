import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { RefreshControl } from 'react-native-gesture-handler';

const Outfits = () => {

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

  return (
    <View style = {styles.container}>
        <View style={styles.searchbarcom}>
            <Image style={styles.searchicon} 
            source={require('./search.png')} 
            />
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
                    // onSearch();
                    setSearch('');
                }}>

                <Image
                source={require('./close.png')}
                style = {styles.closeicon}
                />

                </TouchableOpacity>
            )}

            
        </View>

        {/* <RefreshControl 
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
                            <Image source={{uri:item.image}} style={styles.productsimage} />
                            <View style = {{marginLeft: 10}}>
                                <Text style = {{fontWeight: 'bold'}}>{item.title.length > 30
                                ? item.title.substring(0, 30) + '...'
                                : item.title}</Text>
                                <Text>{item.description.length > 30
                                ? item.description.substring(0, 30) + '...'
                                : item.description}</Text>
                                <Text style={styles.price} >{item.price + " $"}</Text>
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
        height: 100,
        backgroundColor: '#fff',
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
        paddingHorizontal: 10
    },
    searchicon:{
        width: 20,
        height: 20,
        marginHorizontal: 5,
        marginLeft: 5
    },
    closeicon:{
        width: 20,
        height: 20
    },
})