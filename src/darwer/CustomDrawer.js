import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const CustomDrawer = ({navigation}) => {

  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  



  function feedback() {
        navigation.navigate('Feedback');
  }

  function packing() {
        navigation.navigate('Packing');
  }

  function outfits() {
        navigation.navigate('Outfits');
  }
  
  function logout() {
        navigation.navigate('Login');
  }

  return (
    <View>
      <View style = {styles.top_cont}>
      <Image 
      style = {styles.img}
      source={require('./logo.png')} />
      <Text style = {[styles.top_text, {fontWeight: "800"}]}>YourCloset</Text>
      <Text style = {styles.top_text}>support@YourClosetApp.com</Text>

      </View>

      <Text style = {{fontSize: 20, margin: 20, marginBottom: 10
      }}>Closet</Text>

      <View style = {styles.closet}>
      <TouchableOpacity 
      // onPress={handlePress}
      style={[styles.btn, isPressed && styles.itemPressed]}
      >
        <Text style = {styles.btntext}>By Category</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.btn}
      // onPress={category}
      >
        <Text style = {styles.btntext}>By color</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.btn}
      // onPress={setting}
      >
        <Text style = {styles.btntext}>All Items</Text>
      </TouchableOpacity>
      </View>


      <View style = {styles.closet}>
      <TouchableOpacity 
      style = {styles.btn}
      onPress={outfits}
      >
        <Text style = {styles.btntext}>Outfits</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.btn}
      onPress={packing}
      >
        <Text style = {styles.btntext}>Packing</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.btn}
      onPress={feedback}
      >
        <View style = {styles.icons}>
        <Text style = {styles.btntext}>Help & Feedback</Text>
        </View>
      </TouchableOpacity>
      </View>



      <TouchableOpacity 
      style = {styles.btn2}
      onPress={logout}
      >
        <Text style = {styles.btntext2}>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({

  top_cont:{
    width: "100%",
    height: "30%",
    backgroundColor: "#1b75f0",
  },

  top_text:{
    marginLeft: 30,
    marginTop: 1,
    fontSize: 18,
    color: "white"
  },

  icons:{
    flexDirection: 'row',
  },

  img:{
    width: 70,
    height: 70,
    marginTop: 40,
    marginLeft: 30,
    marginBottom: 20,
    borderRadius: 8
  },

  closet:{
    borderBottomWidth: 0.2,
    paddingVertical: 5,
    paddingBottom: 20
  },

  btn:{
    alignSelf: "center",
    marginTop: 10,
    width: "100%",
  },

  btntext:{
    fontSize: 20,
    padding:5,
    marginLeft: 30
  },

  btn2:{
    alignSelf: "center",
    marginTop: 10,
    width: 150,
    alignItems: "center",
    backgroundColor: "#1b75f0",
    padding: 3,
    borderRadius: 8
    
  },

  btntext2:{
    fontSize: 20,
    padding:5,
    color: "white"
  },

  itemPressed: {
    backgroundColor: '#1b75f0',
    color: "white"
  },


})