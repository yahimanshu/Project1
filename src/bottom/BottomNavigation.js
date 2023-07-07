import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screen/Home';
import Notif from './screen/Notif';
import Feedback from './screen/Feedback';
import Login from '../screen/Login';





const Bottom = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Bottom.Navigator >

        <Bottom.Screen 
        name='Home' 
        component={Home}
        options={{headerShown: false, 
            tabBarIcon: (tabInfo) => {
            return(
                <Image style = {styles.icons} source={require('./Home.png')}/>
            )
        }}}  />

        <Bottom.Screen 
        name='Notification' 
        component={Notif}
        options={{headerShown: false, 
            tabBarIcon: (tabInfo) => {
            return(
                <Image style = {styles.icons} source={require('./Notification.png')}/>
            )
        }}}  />

        <Bottom.Screen 
        name='Feedback' 
        component={Feedback}
        options={{headerShown: false, 
            tabBarIcon: (tabInfo) => {
            return(
                <Image style = {styles.icons} source={require('./Feedback.png')}/>
            )
        }}}  />

    </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({
    icons:{
        height:20,
        width: 20
    }
})
