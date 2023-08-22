import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { removeCartItem } from '../reduxtoolkit/CartSlice';
import RazorpayCheckout from 'react-native-razorpay';


const Cart = () => {

    useEffect(() => {
        getTotle()
    })


    const payment = () => {
            var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_2VYHup8J177yIx',
            amount: totelprice * 100,
            name: 'My App',
            order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar'
            },
            theme: {color: '#53a20e'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
      
    }

    const [totelprice, setTotelprice] = useState();

    const navigation = useNavigation();

    const dispatch = useDispatch();
    const addeditems = useSelector(state => state);
    // console.log(addeditems.cart[0].price);
    const removeItem = (index) => {
        dispatch(removeCartItem(index));
    };

    const getTotle = () => {
        var element = 0;
        try {
            for (let index = 0; index < addeditems.cart.length; index++) {
                element = element + addeditems.cart[index].price;
               
               }
          } catch (error) {
            console.log(error)
          } 
            console.log(element)
            setTotelprice(element)
    }


  return (
    <View>
        <TouchableOpacity onPress={()=> navigation.navigate("Outfits")}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "black", marginLeft: 10, marginVertical: 10}}>BACK</Text>
        </TouchableOpacity>
    <View style={{width: "100%", height: "87%"}}>
      <FlatList 
            data={addeditems.cart}
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
                            onPress={() => {removeItem(index)}}>
                                <Text style={styles.Cartbtntxt}>Remove Item</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                </TouchableOpacity>
            }} 
            />
        </View>
            <TouchableOpacity onPress={() => payment()} style={{backgroundColor: "green", padding: 10, width: "90%", alignItems: 'center', borderRadius: 8, alignSelf: 'center',marginTop: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white',}}>Pay Now  {totelprice > 0 ? "$"+totelprice: '' } </Text>
            </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    itemView:{
        width: '90%',
        height: 115,
        paddingTop: 5,
        paddingLeft: 5,
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
        height: 20,
    },
    Cartbtn:{
        width: 120,
        height: 30,
        backgroundColor: 'red',
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
        bottom: 35,
        left: 15,
        fontSize: 15,
        color: "white",
        backgroundColor:"blue",
        textAlign: 'center',
        borderRadius:20,

    },
    carticon:{
        width: 25,
        height: 25
    }
})

export default Cart

