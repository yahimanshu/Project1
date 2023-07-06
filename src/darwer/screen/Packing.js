import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RefreshControl } from 'react-native-gesture-handler';

const Packing = () => {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    getData()
    getDatai()
  }, [])
  
  const getData = () => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=> {
              setProducts(json);
            })
  }




  const [iproducts, setiProducts] = useState([])


  const getDatai = () => {
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=> {
              setiProducts(json);
          }); 
  }

  return (
    <View style = {styles.container}>
      <View style={{marginTop: 10,}}>
        <FlatList 
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <View style = {styles.itemView}>
            <Image 
            style={styles.productsimage} 
            source={{uri:item.image}}
            resizeMethod= 'auto' />
            <View>
              <Text style = {{fontWeight: 'bold', marginTop: 4, marginHorizontal: 8}}>{item.title.length > 15
              ? item.title.substring(0, 15) + "..."
              : item.title}</Text>
              <Text style={{marginHorizontal: 5}}> {item.description.length > 20
              ? item.description.substring(0, 20) + "..."
              : item.description}</Text>
              <Text style = {styles.price}>{item.price + " $"}</Text>
            </View>
          </View>
        }}
        />
      </View>

        <View style = {styles.container}>
          <FlatList 
          data={iproducts}
          numColumns={2}
          renderItem={({item, index}) => {
            return <View style={styles.itemViewi}>
                <Image source={{uri:item.image}} style={styles.productsimagei} />
                <View style = {{marginLeft: 10}}>
                    <Text style = {{fontWeight: 'bold'}}>{item.title.length > 30
                    ? item.title.substring(0, 30) + '...'
                    : item.title}</Text>
                    <Text>{item.description.length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description}</Text>
                    <Text style={styles.pricei} >{item.price + " $"}</Text>
                </View>
            </View>
          }} 
          />
        </View>
    </View>
  )
}

export default Packing

const styles = StyleSheet.create({
  container:{
      flex: 1,
  },
  itemView:{
      width: 200,
      height: 200,
      backgroundColor: '#fff',
      marginTop: 10,
      marginHorizontal: 5,
      elevation: 5,
      borderRadius: 10,
      marginBottom: 10,
  },
  productsimage:{
      width: 150,
      height: 100,
      alignSelf: 'center' 
  },
  price:{
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 8,
      color: 'green',
      marginHorizontal: 8
  },

itemViewi:{
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    marginTop: 10,
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 5,
},
productsimagei:{
    width: 100,
    height: 100,
    alignSelf: 'center'
},
pricei:{
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 4,
    color: 'green'
}
})