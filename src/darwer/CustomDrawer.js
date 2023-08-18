import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const CustomDrawer = ({navigation}) => {

  const [cameraphoto, setCameraphoto] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const [rname, setRname] = useState('YourCloset');
  const [remail, setRemail] = useState('support@yourClosetApp.com');

  useEffect(() => {
    getdata()
  
  })



  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  const getdata = async () => {
    try {
      const sname = await AsyncStorage.getItem('name');
      const semail = await AsyncStorage.getItem('email');
      // const spic = await AsyncStorage.getItem('pic');
      setRname(sname)
      setRemail(semail)
      // setCameraphoto(spic)
      console.log(rname)
      console.log(remail)

    } catch (e) {
      console.log(e)
    }
  
  }
  
  const saveData = async () => {
    try {
      await AsyncStorage.setItem("pic" , cameraphoto);
      return true
    } catch (e) {
      return false
    }
  }


  function feedback() {
        navigation.navigate('Feedback');
  }

  function packing() {
        navigation.navigate('Packing');
  }

  function outfits() {
        navigation.navigate('Outfits');
  }
  
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('token')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

  const opengallery = () => {

    let options = {
      storageOptions:{
        path:"image"
      }
    }

    launchImageLibrary(options,response => {
      console.log(response);
      setCameraphoto(response.assets[0].uri)
      saveData();
      console.log(cameraphoto);
    })
  }

  const logout  = () => {
    removeValue();
    navigation.navigate('Login');
  }

  return (
    <View>
      <View style = {styles.top_cont}>
        <TouchableOpacity
        onPress={opengallery}
        >
          <Image 
          style = {styles.img}
          source={{uri: cameraphoto}} />
        </TouchableOpacity>
      <Text style = {[styles.top_text, {fontWeight: "800"}]}>{rname}</Text>
      <Text style = {styles.top_text}>{remail}</Text>

      </View>

      <Text style = {{fontSize: 20, margin: 20, marginBottom: 10
      }}>Closet</Text>

      <View style = {styles.closet}>
      <TouchableOpacity 
      onPress={() => navigation.navigate("Category")}
      style={[styles.btn, isPressed && styles.itemPressed]}
      >
        <Text style = {styles.btntext}>By Category</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.btn}
      onPress={() =>navigation.navigate("Videoplay")}
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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black'
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