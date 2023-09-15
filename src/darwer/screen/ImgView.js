import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


const ImgView = (props) => {

    const animation = useSharedValue(0);
    const imganimation = useSharedValue(0);
    const [isDay, setIsday] = useState(true);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            ctx.startX = animation.value;
        },
        onActive: (event, ctx) => {
            animation.value = ctx.startX + event.translationX;
        },
        onEnd: (event, ctx) => {
            animation.value = event.translationX > 60 ? withSpring(70) : event.translationX < -60 ? withSpring(-70) : withSpring(0);
        },
    })

    const animationStyle = useAnimatedStyle(() => {
        return{
            transform:[{translateX: animation.value}],
        }
    })

    const animationIconLeft = useAnimatedStyle(() => {
        return{
            transform:[{scale: animation.value > 60 ? withSpring(2) : withSpring(1)}],
        }
    }) 

    const animationIconRight = useAnimatedStyle(() => {
        return{
            transform:[{scale: animation.value < -60 ? (withSpring(2)) : withSpring(1)}],
        }
    }) 

    const animationImg = useAnimatedStyle(() => {
        return{
            transform:[{translateX: imganimation.value}],
        }
    }) 


  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
    <Animated.View style={{backgroundColor: 'green', width: '50%', height: 150, elevation: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5}}>
        <Animated.View style={[{width: 14, height: 14, marginLeft: 20}, animationIconLeft]}>
            <TouchableOpacity onPress={() => {
                Alert.alert("This is " + props.index)
            }}>
                <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
            </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[{width: 14, height: 14, marginRight: 20}, animationIconRight]}>
            <TouchableOpacity onPress={() => {
                Alert.alert("This is " + props.index)
            }}>
            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
    </Animated.View>


    <Animated.View style={[{backgroundColor: isDay ? 'white' : 'black', width: "100%", height: "100%", position: 'absolute', justifyContent: 'center', padding: 10}, animationStyle]}>
    <TouchableOpacity>
         <View style={{width: 120 , height: 120 , backgroundColor: "#000000", borderRadius: 8, margin: 10, justifyContent: 'center', alignItems: 'center'}}>
                 <Image source={{uri: props.imguri}}  style={{width: "95%", height: "95%"}} />
        </View>
    </TouchableOpacity>
        
    </Animated.View>
</Animated.View>
</PanGestureHandler>
  )
}

export default ImgView

const styles = StyleSheet.create({})