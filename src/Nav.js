import { View, Text } from 'react-native'
import React from 'react'
import Splash from './screen/Splash'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './screen/Login';
import Singup from './screen/Singup';
import Home from './screen/Home';
import Test from './screen/Test';
import Cart from './screen/Cart';
import ProductDetail from './darwer/screen/ProductDetail';



const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Singup' component={Singup} options={{headerShown: false}}/>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='Test' component={Test} options={{headerShown: false}}/>
            <Stack.Screen name='Cart' component={Cart} options={{headerShown: false}}/>
            <Stack.Screen name='ProductDetail' component={ProductDetail} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Nav