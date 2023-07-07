import { View, Text, Button, TextInput, StyleSheet, Image, Alert } from 'react-native'
import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

  useEffect(() => {
    getdata();
  })

  // const [isShowingText, setIsShowingText] = useState(true);
  const [name, setname] = useState('');
  const [pass, setpass] = useState('');
  
  const [rname, setRname] = useState('');
  const [rpass, setRpass] = useState('');


let n = ['rname', name]
let p = ['rpass', pass]


  const getdata = async () => {
    try {
      const sname = await AsyncStorage.getItem('name');
      const spass = await AsyncStorage.getItem('pass');
      setRname(sname)
      setRpass(spass)
      console.log(rname)
      console.log(rpass)

    } catch (e) {
      console.log(e)
    }
  
  }

  const settoken = async () => {
    try {
      await AsyncStorage.setItem('token', pass);
    } catch (e) {
      Alert.alert(e)
    }
  } 

  const login = () => {
    if(rname === name && rpass === pass){
      navigation.navigate('Home');
      settoken()
    }
    else{
      if(name == 'Himanshu' && pass == "123456") {
          navigation.navigate('Home');
      }
      else 
      (
        Alert.alert("Try again")
      ) 
    }

  }

  function singup() {
        navigation.navigate('Singup');
  }


  return (
    <View style = {styles.container}>
      <Image 
      style = {styles.logo}
      source={require('./logo.jpg')} />
       <TextInput
          style = {styles.inputs}
          placeholder="Your Name"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={name}
          onChangeText={text => setname(text)}
        />
       <TextInput
          style = {styles.inputs}
          placeholder="Password"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={pass}
          onChangeText={text => setpass(text)}
        />

        <TouchableOpacity
        onPress={login}
        style = {styles.btn} 
        >
          <Text style = {styles.btntext} >Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={singup}
        style = {styles.btn2} 
        >
          <Text style = {styles.btntext2} >Create an account</Text>
        </TouchableOpacity>


    </View>
  )
}

export default Login

const styles = StyleSheet.create({

  container:{
    backgroundColor: "white",
    height: "100%",
    width: "100%"

  },
  logo:{
    height: 150,
    width: 150,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 30
  },

 inputs:{
   fontSize: 20,
   height: 50,
   marginTop: 20,
   marginHorizontal: 25,
   borderWidth: 1,
   borderRadius: 8,
   borderColor: 'black',
   paddingLeft: 10,
   backgroundColor: "#E2E2E2",
  },

  btn:{
    width: 150,
    marginTop: 50,
    alignSelf: "center",
    backgroundColor: "#1b75f0",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black"
  },

  btntext:{
    fontSize: 25,
    alignSelf: "center",
    color: "white",
    padding: 6
  },

  btn2:{
    width: 200,
    alignSelf: "center",
    marginTop: 8
  },

  btntext2:{
    color: "#1b75f0",
    fontSize: 20,
    alignSelf: "center"
  }
 });