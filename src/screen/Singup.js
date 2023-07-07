import { View, Text, Button, TextInput, StyleSheet, Image, Alert } from 'react-native'
import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Singup = ({navigation}) => {

const [name, setname] = useState('');
const [email, setemail] = useState();
const [pass, setpass] = useState();
const [conpass, setConpass] = useState();
const [phone, setPhone] = useState();

let n = ['name', name]
let e = ['email', email]
let p = ['pass', pass]
let ph = ['phone', phone]

const saveData = async () => {
  try {
    await AsyncStorage.multiSet([n,e,p,ph]);
    return true
  } catch (e) {
    return false
  }
}

// const getdata = async () => {
//   try {
//     const data = await AsyncStorage.multiGet(['name','email','pass']);
//     console.log(data);
//   } catch (e) {

//   }

// }


    function login() {
      if(saveData()){
            navigation.navigate('Login');
      }
      else{
        Alert.alert("User not created")
      }
  }

  function singup() {
        navigation.navigate('Login');
  }

  const validationSchema = Yup.object().shape({
    //   inputValue: Yup.string().required('Input cannot be empty').min(3, 'Input must be at least 3 characters long')
      inputValue: Yup.string().email("this is an email")
    });
    
    const handleSubmit = (values) => {
      // Perform actions with the valid input
      console.log(values);
    };

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
          placeholder="email"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={email}
          onChangeText={text => setemail(text)}
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
       <TextInput
          style = {styles.inputs}
          placeholder="Confirm Password"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={conpass}
          onChangeText={text => setConpass(text)}
        />
       <TextInput
          style = {styles.inputs}
          placeholder="Phone"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={phone}
          onChangeText={text => setPhone(text)}
        />


        <TouchableOpacity
        onPress={login}
        style = {styles.btn} 
        >
          <Text style = {styles.btntext} >Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={singup}
        style = {styles.btn2} 
        >
          <Text style = {styles.btntext2} >Already have an account</Text>
        </TouchableOpacity>


    </View>
  )
}

export default Singup

const styles = StyleSheet.create({

  container:{
    backgroundColor: "white",
    height: "100%"

  },
  logo:{
    height: 150,
    width: 150,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 30
  },

 inputs:{
  paddingLeft: 10,
  backgroundColor: "#E2E2E2",
   fontSize: 20,
   height: 50,
   marginTop: 20,
   marginHorizontal: 25,
   borderWidth: 1,
   borderRadius: 8,
   borderColor: 'black'
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
    width: 250,
    alignSelf: "center",
    marginTop: 8
  },

  btntext2:{
    color: "#1b75f0",
    fontSize: 20,
    alignSelf: "center"
  }
 });