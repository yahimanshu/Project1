import React, { useRef, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Text, Animated } from 'react-native';

const ShakingButton = () => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    const handlePress = () => {
      Animated.sequence([
        Animated.timing(scaleValue, { toValue: 1.1, duration: 50, useNativeDriver: true }),
        Animated.timing(scaleValue, { toValue: 1, duration: 50, useNativeDriver: true }),
      ]).start();
    };
  
    return (
      <TouchableWithoutFeedback onPress={handlePress}
      style={{flex: 1, justifyContent: 'center'}}>
        <Animated.View
          style={{
            transform: [{ scale: scaleValue }],
            backgroundColor: 'red',
            height: 50,
            borderRadius: 23,
            width: 150,
            alignSelf: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 23, alignSelf: 'center' ,fontWeight: 'bold' }}>Sign in</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };
  

export default ShakingButton;
