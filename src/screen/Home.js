import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Drawernav from '../darwer/Drawernav'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



const Home = () => {

  useEffect(() => {
    getdata()
  })

  const navigation = useNavigation()

const getdata = async () => {
  try {
    const sname = await AsyncStorage.getItem('name');
    const token = await AsyncStorage.getItem('token');
    console.log(token)
    if(token == null ){
      navigation.navigate('Login')
    }

  } catch (e) {
    console.log(e)
  }
}

  return (
    <View style = {{flex: 1}}>
      {/* <Text style= {{
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 400,
        fontSize: 25,
        color: "blue"
      }}>Welcome In My First App</Text> */}
        <Drawernav/>
    </View>
  )
}

export default Home
