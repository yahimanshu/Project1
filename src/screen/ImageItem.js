import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler'

const leftswipe = (ind) => {
    return(
        <View>
            <TouchableOpacity onPress={() => {
                Alert.alert("Delete " + ind)
            }}>
            <Image style={{width: 25, height: 25, marginTop: 50, marginLeft: 5}} source={require('./delete.png')} />
            </TouchableOpacity>
        </View>
    )
}

const ImageItem = (props) => {
  return (
    <Swipeable renderLeftActions={() => leftswipe(props.index)}>
        <View style={{width: 180 , height: 180 , backgroundColor: "#000000", borderRadius: 8, margin: 10, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={{uri: props.imguri}}  style={{width: "95%", height: "95%"}} />
        </View>
    </Swipeable>
  )
}

export default ImageItem

const styles = StyleSheet.create({})