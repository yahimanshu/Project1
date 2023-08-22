import { View, Text , StyleSheet, Image, Animated} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { s } from 'react-native-size-matters';

const Splash = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        setTimeout(() => {
          startAnimation();
        }, 2000);
    })

    
    const startAnimation = () => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      setTimeout(() =>{
        navigation.navigate('Login');
      },100)
    }

  return (
    <View style={styles.container}>
      <Animated.View style = {[styles.logo,
        {
          transform: [
            {
              scale: animation.interpolate({
                inputRange: [0,1],
                outputRange: [1,30]
              })
            }
      ]}]}>
        <Image source={require('./logo.jpg')} />
      </Animated.View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'white',
        height: "100%"
    },
    logo:{
        alignSelf: "center",
        marginTop: 280,
        height: 200,
        width: 200

    }
})