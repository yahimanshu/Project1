import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Drawernav from '../darwer/Drawernav'


const Home = () => {
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
