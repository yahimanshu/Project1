import { Dimensions, FlatList, Image, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

const Allitems = () => {


    const [photo, setPhoto] = useState();

    useEffect(() => {
        // hasPermission();
    }, [])

    const hasPermission = async () => {
        const permission = Platform.Version >= 33 
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES 
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE; 

        const hasPermission = await PermissionsAndroid.check(permission);
        if(hasPermission){
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted'
    }  

    const getAllPhotos = () =>{
        console.log("running")
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(r => {
            // console.log(JSON.stringify(r.edges))
            setPhoto(r.edges);
            // this.setState({ photos: r.edges });
          })
          .catch((err) => {
             //Error Loading Images
          });
    }

    const deleteimg = (imgurl) => {
        console.log([imgurl])
        CameraRoll.deletePhotos([imgurl]);
    }

  return (
    <View style={{flex: 1}}>
        <View style={{width: "100%", alignItems: 'center'}}> 
            <FlatList
            numColumns={2}
                data={photo}
                renderItem={({item, index}) => {
                    return(
                        <TouchableOpacity onPress={() => {
                            deleteimg(item.node.image.uri)
                        }}>
                            <View style={{width: Dimensions.get('window').width / 2 - 20 , height: 200 , backgroundColor: "#000000", borderRadius: 8, margin: 10, justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={{uri: item.node.image.uri}}  style={{width: "95%", height: "95%"}} />
                            </View>
                        </TouchableOpacity>
                    )
                    
                }}
            />
        </View>
        <TouchableOpacity
        style={{width: "90%", height: 50, backgroundColor : 'black', justifyContent: 'center', alignSelf:'center', alignItems: 'center' ,position: 'absolute', bottom: 20, borderRadius: 8}}
        onPress={() => {
            getAllPhotos();
        }} >
            <Text style={{color: 'white'}}>Sync Photo to Gallery</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Allitems

const styles = StyleSheet.create({})