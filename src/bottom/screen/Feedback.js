import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Feedback = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const result = navigation.addListener('beforeRemove', e => {
      return navigation.navigate('Home')
    });
  }, [navigation])

  const [name, setname] = useState('');
  const [email, setemail] = useState();
  const [date, setdate] = useState();

  return (
    <View style = {styles.container}>
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
          placeholder="Email"
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
          placeholder="DD-MM-YYYY"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={email}
          onChangeText={text => setemail(text)}
        />
       <TextInput
          style = {styles.inputs1}
          placeholder="Enter your query"
          blurOnSubmit
          autoCorrect={false}
          maxLength={30}
          autoCapitalized="words"
          placeholderTextColor="#777"
          value={date}
          multiline={true}
          underlineColorAndroid='transparent'
          onChangeText={text => setdate(text)}
        />

        <TouchableOpacity
        // onPress={login}
        style = {styles.btn} 
        >
          <Text style = {styles.btntext} >Submit</Text>
        </TouchableOpacity>


    </View>
  )
}

export default Feedback

const styles = StyleSheet.create({

  container:{
    backgroundColor: "white",
    height: "100%",
    paddingTop: 100

  },

 inputs:{
   backgroundColor: "#E2E2E2",
   fontSize: 20,
   height: 50,
   marginTop: 20,
   marginHorizontal: 25,
   borderWidth: 1,
   borderRadius: 8,
   borderColor: 'black',
   paddingLeft: 10
  },
 inputs1:{
   backgroundColor: "#E2E2E2",
   fontSize: 20,
   height: 200,
   marginTop: 20,
   marginHorizontal: 25,
   borderWidth: 1,
   borderRadius: 8,
   borderColor: 'black',
   paddingLeft: 10
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