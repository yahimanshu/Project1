import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RefreshControl } from 'react-native-gesture-handler';

const Outfits = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
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
            }); 
    }

  return (
    <View style = {styles.container}>
        {/* <RefreshControl 
        refreshing={loading}
        onRefresh={() => {
            getData();
        }}> */}
            <FlatList 
            data={products}
            renderItem={({item, index}) => {
                return <View style={styles.itemView}>
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
    }
})