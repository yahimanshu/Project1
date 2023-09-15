import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const Swap = () => {

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
    <GestureHandlerRootView style={{flex: 1}}>

        
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: isDay ? '#E2E2E2' : 'gray'}}>
        <TouchableOpacity onPress={() => {
            if(imganimation.value == 0){
                imganimation.value = withTiming(110, {duration: 500})
                setIsday(false);
            }else{
                imganimation.value = withTiming(0, {duration: 500})
                setIsday(true);
            }
        }} style={{width: 150, height: 40, borderWidth: 1, borderColor: isDay ? 'black' : 'white' , alignSelf: 'flex-end', marginRight: 10, marginVertical: 10, borderRadius: 20, backgroundColor: isDay ? 'white' : 'black',paddingVertical: 5, paddingHorizontal: 6}}>
            <Animated.View style={[{width: 25, height: 25}, animationImg]} >
                {isDay ? <Image source={require('./sun.png')} style={{width: "100%", height: "100%"}} />
                : <Image source={require('./moon.png')} style={{width: "100%", height: "100%"}} />}
            </Animated.View>
        </TouchableOpacity>

            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={{backgroundColor: 'green', width: '100%', height: 100, elevation: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5}}>
                    <Animated.View style={[{width: 14, height: 14, marginLeft: 20}, animationIconLeft]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is a left click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{width: 14, height: 14, marginRight: 20}, animationIconRight]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is right click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{backgroundColor: isDay ? 'white' : 'black', width: "100%", height: "100%", position: 'absolute', justifyContent: 'center', padding: 10}, animationStyle]}>
                        <View style={{flexDirection: 'row'}}>   
                            <View style={{backgroundColor: "#52d193", width: 70, height: 70, borderRadius: 35, justifyContent: 'center'}}>
                                <Text style={{color:isDay? 'white' : 'black' , alignSelf: 'center', fontSize: 40}}>U</Text>
                            </View>
                            <View style={{marginTop: -5, marginLeft: 10}}>
                                <Text style={{fontSize: 22, color: isDay ? null : 'white'}}>Upstop Exclusive</Text>
                                <Text style={{color: isDay ? null : 'white'}} >Hack jobs with mentors from BCG, A...</Text>
                                <Text style={{color: isDay ? null : 'white'}}>Hi Himanshu, if this is you when som...</Text>
                            </View>
                            <Text style={{position: 'absolute', right: 10}}>4:23 PM</Text>
                            <Image style={{width: 25, height: 25, tintColor: 'yellow', position: 'absolute', right: 10, bottom: 10}} source={require('./star.png')} />
                        </View>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>


            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={{backgroundColor: 'green', width: '100%', height: 100, elevation: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5}}>
                    <Animated.View style={[{width: 14, height: 14, marginLeft: 20}, animationIconLeft]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is a left click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{width: 14, height: 14, marginRight: 20}, animationIconRight]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is right click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{backgroundColor: isDay ? 'white' : 'black', width: "100%", height: "100%", position: 'absolute', justifyContent: 'center', padding: 10}, animationStyle]}>
                        <View style={{flexDirection: 'row'}}>   
                            <View style={{backgroundColor: "#52d193", width: 70, height: 70, borderRadius: 35, justifyContent: 'center'}}>
                                <Text style={{color:isDay? 'white' : 'black' , alignSelf: 'center', fontSize: 40}}>U</Text>
                            </View>
                            <View style={{marginTop: -5, marginLeft: 10}}>
                                <Text style={{fontSize: 22, color: isDay ? null : 'white'}}>Upstop Exclusive</Text>
                                <Text style={{color: isDay ? null : 'white'}} >Hack jobs with mentors from BCG, A...</Text>
                                <Text style={{color: isDay ? null : 'white'}}>Hi Himanshu, if this is you when som...</Text>
                            </View>
                            <Text style={{position: 'absolute', right: 10}}>4:23 PM</Text>
                            <Image style={{width: 25, height: 25, tintColor: 'yellow', position: 'absolute', right: 10, bottom: 10}} source={require('./star.png')} />
                        </View>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>

            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={{backgroundColor: 'green', width: '100%', height: 100, elevation: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5}}>
                    <Animated.View style={[{width: 14, height: 14, marginLeft: 20}, animationIconLeft]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is a left click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{width: 14, height: 14, marginRight: 20}, animationIconRight]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is right click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{backgroundColor: isDay ? 'white' : 'black', width: "100%", height: "100%", position: 'absolute', justifyContent: 'center', padding: 10}, animationStyle]}>
                        <View style={{flexDirection: 'row'}}>   
                            <View style={{backgroundColor: "#52d193", width: 70, height: 70, borderRadius: 35, justifyContent: 'center'}}>
                                <Text style={{color:isDay? 'white' : 'black' , alignSelf: 'center', fontSize: 40}}>U</Text>
                            </View>
                            <View style={{marginTop: -5, marginLeft: 10}}>
                                <Text style={{fontSize: 22, color: isDay ? null : 'white'}}>Upstop Exclusive</Text>
                                <Text style={{color: isDay ? null : 'white'}} >Hack jobs with mentors from BCG, A...</Text>
                                <Text style={{color: isDay ? null : 'white'}}>Hi Himanshu, if this is you when som...</Text>
                            </View>
                            <Text style={{position: 'absolute', right: 10}}>4:23 PM</Text>
                            <Image style={{width: 25, height: 25, tintColor: 'yellow', position: 'absolute', right: 10, bottom: 10}} source={require('./star.png')} />
                        </View>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>

            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={{backgroundColor: 'green', width: '100%', height: 100, elevation: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5}}>
                    <Animated.View style={[{width: 14, height: 14, marginLeft: 20}, animationIconLeft]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is a left click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{width: 14, height: 14, marginRight: 20}, animationIconRight]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is right click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{backgroundColor: isDay ? 'white' : 'black', width: "100%", height: "100%", position: 'absolute', justifyContent: 'center', padding: 10}, animationStyle]}>
                        <View style={{flexDirection: 'row'}}>   
                            <View style={{backgroundColor: "#52d193", width: 70, height: 70, borderRadius: 35, justifyContent: 'center'}}>
                                <Text style={{color:isDay? 'white' : 'black' , alignSelf: 'center', fontSize: 40}}>U</Text>
                            </View>
                            <View style={{marginTop: -5, marginLeft: 10}}>
                                <Text style={{fontSize: 22, color: isDay ? null : 'white'}}>Upstop Exclusive</Text>
                                <Text style={{color: isDay ? null : 'white'}} >Hack jobs with mentors from BCG, A...</Text>
                                <Text style={{color: isDay ? null : 'white'}}>Hi Himanshu, if this is you when som...</Text>
                            </View>
                            <Text style={{position: 'absolute', right: 10}}>4:23 PM</Text>
                            <Image style={{width: 25, height: 25, tintColor: 'yellow', position: 'absolute', right: 10, bottom: 10}} source={require('./star.png')} />
                        </View>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>

            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={{backgroundColor: 'green', width: '100%', height: 100, elevation: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5}}>
                    <Animated.View style={[{width: 14, height: 14, marginLeft: 20}, animationIconLeft]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is a left click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{width: 14, height: 14, marginRight: 20}, animationIconRight]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is right click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{backgroundColor: isDay ? 'white' : 'black', width: "100%", height: "100%", position: 'absolute', justifyContent: 'center', padding: 10}, animationStyle]}>
                        <View style={{flexDirection: 'row'}}>   
                            <View style={{backgroundColor: "#52d193", width: 70, height: 70, borderRadius: 35, justifyContent: 'center'}}>
                                <Text style={{color:isDay? 'white' : 'black' , alignSelf: 'center', fontSize: 40}}>U</Text>
                            </View>
                            <View style={{marginTop: -5, marginLeft: 10}}>
                                <Text style={{fontSize: 22, color: isDay ? null : 'white'}}>Upstop Exclusive</Text>
                                <Text style={{color: isDay ? null : 'white'}} >Hack jobs with mentors from BCG, A...</Text>
                                <Text style={{color: isDay ? null : 'white'}}>Hi Himanshu, if this is you when som...</Text>
                            </View>
                            <Text style={{position: 'absolute', right: 10}}>4:23 PM</Text>
                            <Image style={{width: 25, height: 25, tintColor: 'yellow', position: 'absolute', right: 10, bottom: 10}} source={require('./star.png')} />
                        </View>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>

            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={{backgroundColor: 'green', width: '100%', height: 100, elevation: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5}}>
                    <Animated.View style={[{width: 14, height: 14, marginLeft: 20}, animationIconLeft]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is a left click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{width: 14, height: 14, marginRight: 20}, animationIconRight]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("This is right click")
                        }}>
                            <Image source={require('./star.png')}  style={{width: '100%', height: '100%'}} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[{backgroundColor: isDay ? 'white' : 'black', width: "100%", height: "100%", position: 'absolute', justifyContent: 'center', padding: 10}, animationStyle]}>
                        <View style={{flexDirection: 'row'}}>   
                            <View style={{backgroundColor: "#52d193", width: 70, height: 70, borderRadius: 35, justifyContent: 'center'}}>
                                <Text style={{color:isDay? 'white' : 'black' , alignSelf: 'center', fontSize: 40}}>U</Text>
                            </View>
                            <View style={{marginTop: -5, marginLeft: 10}}>
                                <Text style={{fontSize: 22, color: isDay ? null : 'white'}}>Upstop Exclusive</Text>
                                <Text style={{color: isDay ? null : 'white'}} >Hack jobs with mentors from BCG, A...</Text>
                                <Text style={{color: isDay ? null : 'white'}}>Hi Himanshu, if this is you when som...</Text>
                            </View>
                            <Text style={{position: 'absolute', right: 10}}>4:23 PM</Text>
                            <Image style={{width: 25, height: 25, tintColor: 'yellow', position: 'absolute', right: 10, bottom: 10}} source={require('./star.png')} />
                        </View>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>

           



        </View>
    </GestureHandlerRootView>
  )
}

export default Swap

const styles = StyleSheet.create({})