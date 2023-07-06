import { View, Text } from 'react-native'
import React from 'react'
import Splash from './screen/Splash'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './screen/Login';
import Singup from './screen/Singup';
import Home from './screen/Home';


const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Singup' component={Singup} options={{headerShown: false}}/>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Nav