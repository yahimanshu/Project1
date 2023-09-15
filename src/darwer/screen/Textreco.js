import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextRecognition from '@react-native-ml-kit/text-recognition';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



const Textreco = () => {

    const [cameraphoto, setCameraphoto] = useState('');
    const [rectext, setRectext] = useState('');

    useEffect(() => {
        // imgdata();
    })




    const opengallery = () => {

        let options = {
          storageOptions:{
            path:"image"
          }
        }
    
        launchImageLibrary(options,response => {
          console.log(response);
    
          try{
    
           setCameraphoto(response.assets[0].uri)
            }catch (error){
              console.log(error)
            }
          //   saveData();
            console.log("this is a image url : " + cameraphoto);
            imgdata();
          })
          
    
      }


    const imgdata = async () => {  
        const result = await TextRecognition.recognize(cameraphoto);
            console.log(result);
            // console.log('Recognized text:', result.text);
    

            setRectext(result.text);
          
        
            // for (let block of result.blocks) {
            //     console.log('Block text:', block.text);
            //     console.log('Block frame:', block.frame);
              
            //     for (let line of block.lines) {
            //       console.log('Line text:', line.text);
            //       console.log('Line frame:', line.frame);
            //     }
            //   }
         
    }


  return (
    <View>
      <TouchableOpacity
    //   style={{height: 70, width: 70, borderWidth: 1, }}
        onPress={opengallery}
        >
          <Image 
          style = {styles.img}
          resizeMode="contain"
          source={{uri: cameraphoto}} />
        </TouchableOpacity>

      <ScrollView style={{paddingBottom: 200}}>
        <Text style={{fontSize: 20, color: "black", textAlign: 'center'}}>{rectext}</Text>
      </ScrollView>
    </View>
  )
}

export default Textreco

const styles = StyleSheet.create({
    img:{
        width: 350,
        height: 250,
        marginTop: 40,
        marginLeft: 30,
        marginBottom: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black'
      },
})