import { View, Text, Alert } from 'react-native'
import React, { useEffect } from 'react'
import Nav from './src/Nav'
import messaging from '@react-native-firebase/messaging'

const App = () => {
  useEffect(() => {
    getDeviceToken();
  },[])

  const getDeviceToken = async() => {
    let tok = await messaging().getToken();
    console.log(tok);
  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // let ms = JSON.stringify(remoteMessage);
      const { title, body } = remoteMessage.notification || {};
      console.log(title);
      if(title == "Test"){
        
      }
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return <Nav/>
}

export default App 