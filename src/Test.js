import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, FlatList, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getdata } from './AsyncStorageFunctions';

const Test = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const storeData = async () => {
      try {
        await AsyncStorage.setItem('my-key', "Hii this is a test data");
      } catch (e) {
        
      }
    };

    storeData()

    const key = 'my-key';

    getdata(key)
      .then((value) => {
        console.log(`Value for key '${key}':`, value);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    
      
    // const scrollToNextItem = () => {
    //   const newIndex = (currentIndex + 1) % data.length;
    //   flatListRef.current.scrollToIndex({ animated: true, index: newIndex });
    //   setCurrentIndex(newIndex);
    // };
  
    // useEffect(() => {
    //   const scrollInterval = setInterval(scrollToNextItem, 3000);
  
    //   return () => clearInterval(scrollInterval);
    // }, [currentIndex]);
  
   

    // const [data, setDate] = useState([
    //     {title: "Slide 1", id: 1, desc: "In mobile apps, users often need to toggle password visibility for better user experience and accuracy. React Native simplifies this with the `SecureTextEntry` prop in the `TextInput` component, enabling easy implementation of password show/hide functionality."},
    //     {title: "Slide 2", id: 2, desc: "Create a React Native component with a password input field and a toggle button/icon. Maintain a state variable to track the visibility of the password. Use the SecureTextEntry prop of the TextInput component to toggle the visibility of the "},
    //     {title: "Slide 3", id: 3, desc: "Whether you're preparing for your first job interview or aiming to upskill in this ever-evolving tech landscape, GeeksforGeeks Courses are your key to success. We provide top-quality content at affordable prices, all geared towards accelerating your growth in a time-bound "},
    // ]); 
  
    // const [currentindex, setCurrentindex] = useState(0)




    
  return (
    // <SafeAreaView style={{flex: 1}}>
    //     <View>
    //         <FlatList
    //         onScroll={e=>{
    //             setCurrentindex((e.nativeEvent.contentOffset.x / Dimensions.get('window').width).toFixed(0))
    //         }} 
    //         horizontal
    //         pagingEnabled
    //         showsHorizontalScrollIndicator={false}
    //         data={data} 
    //         renderItem={({item, index}) =>{
    //             return(
    //                 <View style={{width: Dimensions.get("window").width,
    //                 height: Dimensions.get('window').height - 300, 
    //                 justifyContent: 'center',
    //                 alignContent:'center'}}>
    //                     <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 40, color: 'black'}}>{item.title}</Text>
    //                     <Text style={{paddingHorizontal: 20, fontSize: 15 , marginTop: 40}}>{item.desc}</Text>

    //                 </View>
    //             )
    //         }} 
            
    //         />
    //     </View>
    //     <View 
    //     style={{
    //         flexDirection: 'row', 
    //         alignSelf: 'center', 
    //         }}>
    //             {
    //                 data.map((item, index) => {
    //                     return<View style={{width: 10, height: 10, backgroundColor: currentindex == index ? "red" : "black", marginLeft: 10, borderRadius: 5}}></View>
    //                 })
    //             }
    //     </View>
    // </SafeAreaView>

    <SafeAreaView style={{ flex: 1 }}>
    {/* <View>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height - 300,
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 40, color: 'black' }}>{item.title}</Text>
            <Text style={{ paddingHorizontal: 20, fontSize: 15, marginTop: 40 }}>{item.desc}</Text>
          </View>
        )}
        onScroll={(e) => {
          setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / Dimensions.get('window').width));
        }}
        scrollEventThrottle={16} // Adjust the throttle as needed
      />
    </View>
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            width: 10,
            height: 10,
            backgroundColor: currentIndex === index ? 'red' : 'black',
            marginLeft: 10,
            borderRadius: 5,
          }}
        />
      ))}
    </View> */}
    <TouchableOpacity style={{ alignItems: 'center', marginTop: 50, paddingHorizontal: 10, paddingVertical: 5, borderColor: 'black', borderWidth: 1, width: 100, alignSelf: 'center'}}
    onPress={() => {

    }}
    >
      <Text>Button</Text>
    </TouchableOpacity>
  </SafeAreaView>
  )
}

export default Test

