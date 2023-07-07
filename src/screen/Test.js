// import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, PermissionsAndroid, Image, Platform, } from 'react-native'
// import React, { useState } from 'react'
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { PERMISSIONS, request } from 'react-native-permissions';


// const Test = () => {

//   const [cameraphoto, setCameraphoto] = useState();
    
//     // const validationSchema = Yup.object().shape({
//     // //   inputValue: Yup.string().required('Input cannot be empty').min(3, 'Input must be at least 3 characters long')
//     //   inputValue: Yup.string().email("this is an email")
//     // });
    
//     // const handleSubmit = (values) => {
//     //   // Perform actions with the valid input
//     //   console.log(values);
//     // };

//   const askForPermissions = permisson => {
//     request(permisson).then((result) => {
//       console.log(result);
//     });
//   }


//     const opencamera =  () => {
//       let options = {
//         storageOptions:{
//           path:"image"
//         }
//       }

//         launchCamera(options, response => {
//           // setCameraphoto(response.assets[0].uri)
//         })
//     }


//     const opengallery = () => {

//       let options = {
//         storageOptions:{
//           path:"image"
//         }
//       }

//       launchImageLibrary(options,response => {
//         console.log(response);
//         setCameraphoto(response.assets[0].uri)
//         console.log(cameraphoto)
//       })
//     }


//   return (
//     <View>
//       {/* <Formik
//         initialValues={{ inputValue: '' }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ handleChange, handleSubmit, values, errors }) => (
//           <View>
//             <TextInput
//               value={values.inputValue}
//               onChangeText={handleChange('inputValue')}
//               placeholder="Enter a value"
//             />
//             <Text style={{ color: 'red' }}>{errors.inputValue}</Text>
//             <Button title="Submit" onPress={handleSubmit} />
//           </View>
//         )}
//       </Formik> */}

//       <View>
//       <TouchableOpacity
//         onPress={opencamera}
//         style = {styles.btn} 
//         >
//           <Text style = {styles.btntxt} >open Camera</Text>
//         </TouchableOpacity>

//         <Image style = {styles.photo} source={{uri: cameraphoto}} />

//       <TouchableOpacity
//         onPress={opengallery}
//         style = {styles.btn} 
//         >
//           <Text style = {styles.btntxt} >open Gallery</Text>
//         </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => {
//           if(Platform.OS=='ios'){
//             askForPermissions(PERMISSIONS.IOS.CAMERA);
//           }else{
//             askForPermissions(PERMISSIONS.ANDROID.CAMERA);
//           }
//         }}
//         style = {styles.btn} 
//         >
//           <Text style = {styles.btntxt} >open Camera</Text>
//         </TouchableOpacity>

//       {/* <TouchableOpacity
//         onPress={() => {
//           if(Platform.OS=='ios'){
//             askForPermissions(PERMISSIONS.IOS.MEDIA_LIBRARY);
//           }else{
//             askForPermissions(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
//           }
//         }}
//         style = {styles.btn} 
//         >
//           <Text style = {styles.btntxt} >open Gallery</Text>
//         </TouchableOpacity> */}

        

//        </View>
//   </View>
//   )
// }

// export default Test

// const styles = StyleSheet.create({
//   btn:{
//     backgroundColor: 'blue',
//     height: 40,
//     width: 200,
//     borderRadius: 8,
//     alignSelf: 'center',
//     marginVertical: 30,
//     justifyContent: 'center'
//   },
//   btntxt:{
//     color: 'white',
//     alignSelf: 'center',
//     fontSize: 18
//   },
//   photo:{
//     alignSelf: 'center',
//     height: 80,
//     width: 80
//   }

// })

import { View, Text } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}

export default Test