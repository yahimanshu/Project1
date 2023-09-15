import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Video from 'react-native-video';

const Videoplay = () => {

    const [clicked, setClicked] = useState(false);
    const [puased, setPuased] = useState(false);
    const playerControl = () => {
        if(clicked == false){
            setClicked(true);
        }else{
            setClicked(true);
        }
        console.log(clicked);
    }


    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={{ width: 900, height: 500, left : -475}}
                onPress={playerControl}>
                <Video
                paused={puased}
                repeat={true}
                
                source={{ uri: "https://www.shutterstock.com/shutterstock/videos/1060933054/preview/stock-footage-circa-in-this-animated-film-a-sheep-saves-his-nephews-from-a-hungry-wolf.webm" }}   // Can be a URL or a local file.
                    //    ref={(ref) => {
                    //      this.player = ref
                    //    }}                                      // Store reference
                    //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    //    onError={this.videoError}               // Callback when video cannot be loaded
                    style={{ width: '100%', height: "100%" }}
                    resizeMode="contain" />

                {clicked && (<TouchableOpacity
                onPress={() => setClicked(false)}
                style={{ width: '100%', height: "100%", position: 'absolute', backgroundColor: 'rgba(0,0,0,.3)' , justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Image 
                                style = {{width: 30, height: 30, tintColor: 'white'}}
                                source={require('./backward.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => {setPuased(!puased)}}>
                            <Image 
                                style = {{width: 30, height: 30, tintColor: 'white', marginHorizontal: 60}}
                                source={require('./play.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                style = {{width: 30, height: 30, tintColor: 'white'}}
                                source={require('./forward.png')} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>)}

            </TouchableOpacity>
        </View>
    )
}

export default Videoplay

const styles = StyleSheet.create({})