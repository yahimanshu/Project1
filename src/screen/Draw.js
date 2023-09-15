import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Modal,
  Image,
} from 'react-native';

import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
import Slider from '@react-native-community/slider';

const Draw = () => {

  const canvasRef = useRef(null);
  const [opacity, setOpacity] = useState(1); // Default opacity
  const [color, setColor] = useState('rgba(0, 0, 0'); // Default color with opacity
  const [swidth, Setswidth] = useState(1);
  const [visible, setVisible] = useState(false);
  const [selectedC, setSelecteC] = useState(0);
  const [selectedT, setSelecteT] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 2 }}>
        <Button onPress={() => console.log("TODO FOR SAVE THE IMAGE")} title="save" />
        <Button onPress={canvasRef.current?.undo} title="undo" />
        <Button onPress={canvasRef.current?.redo} title="redo" />
        <Button onPress={canvasRef.current?.reset} title="Reset" />
      </View>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={`${color} + ${opacity})`}
        strokeWidth={swidth}
        containerStyle={[styles.container, { backgroundColor: 'white' }]}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        hardwareAccelerated={true}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end', width: 380, marginHorizontal: 15, marginBottom: 37 }}>
          <View style={{ borderRadius: 10, paddingHorizontal: 2, borderWidth: 0.2, marginBottom: 5 }}>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => {
                  setColor(`rgba(255, 255, 255,`)
                  setOpacity(1)
                  Setswidth(10)
                  setSelecteT(5)
                }}
              >
                <Image style={[selectedT == 5 ? { opacity: 1 } : { opacity: 0.5 }]} source={require('./eraser.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false)
                }}
              >
                <Image source={require('./cancel.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0.8 }}>
              <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity
                    onPress={() => {
                      setOpacity(.7)
                      Setswidth(3)
                      setSelecteT(0)
                    }}
                  >
                    <View style={{ backgroundColor: 'white', }}>
                      <Image style={[{ height: 150, width: 50,}, selectedT == 0 ? { opacity: 1 } : {opacity: 0.5 }]} source={require('./pen1.png')} resizeMode='contain' />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {  
                      setOpacity(.3)
                      Setswidth(4)
                      setSelecteT(1)
                    }}
                  >
                    <View style={{ backgroundColor: 'white', }}>
                      <Image style={[{ height: 150, width: 50 }, selectedT == 1 ? { opacity: 1 } : {opacity: 0.5 }]} source={require('./pen2.png')} resizeMode='contain' />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setOpacity(1.)
                      Setswidth(2)
                      setSelecteT(2)
                    }}
                  >
                    <View style={{ backgroundColor: 'white', }}>
                      <Image style={[{ height: 150, width: 50 }, selectedT == 2 ? { opacity: 1 } : {opacity: 0.5 }]} source={require('./ballpen.png')} resizeMode='contain' />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      
                      setSelecteT(3)
                    }}
                  >
                    <View style={{ backgroundColor: 'white', }}>
                      <Image style={[{ height: 150, width: 50 }, selectedT == 3 ? { opacity: 1 } : {opacity: 0.5 }]} source={require('./penclie.png')} resizeMode='contain' />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setSelecteT(4)
                      setOpacity(.7)
                      Setswidth(5)
                    }}
                  >
                    <View style={{ backgroundColor: 'white', }}>
                      <Image style={[{ height: 150, width: 50 }, selectedT == 4 ? { opacity: 1 } : {opacity: 0.5 }]} source={require('./bursh.png')} resizeMode='contain' />
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  Setswidth(swidth - 1)
                }}
              >
                <Image style={{ height: 40, width: 40, marginTop: 20, marginLeft: 5 }} source={require('./subtract.png')} />
              </TouchableOpacity>
              <View>
                <Text style={{ alignSelf: 'center', bottom: -40, fontSize: 20, fontWeight: 'bold', color: 'black' }}>{swidth}</Text>
                <Slider
                  style={{ width: 290, height: 100 }}
                  value={swidth / 100}
                  onValueChange={(value) => {
                    Setswidth(Math.floor(value * 100))
                  }}
                  thumbTintColor={'blue'}
                  minimumTrackTintColor="blue"
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  Setswidth(swidth + 1)
                }}
              >
                <Image style={{ height: 40, width: 40, marginTop: 20 }} source={require('./add.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10, height: 80 }}>
              <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <TouchableOpacity
                    style={selectedC == 0 ? styles.selectedC : {}}
                    onPress={() => {
                      setColor(`rgba(0, 0, 0,`)
                      setSelecteC(0)
                    }}
                  >
                    <View style={[{ backgroundColor: 'black' }, styles.colorpate,]}>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={selectedC == 1 ? styles.selectedC : {}}
                    onPress={() => {
                      setColor(`rgba(255, 255, 255,`)
                      setSelecteC(1)
                    }}
                  >
                    <View style={[{ backgroundColor: 'white', }, styles.colorpate,]}>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={selectedC == 2 ? styles.selectedC : {}}
                    onPress={() => {
                      setColor(`rgba(255, 0,0 ,`)
                      setSelecteC(2)
                    }}
                  >
                    <View style={[{ backgroundColor: 'red', }, styles.colorpate,]}>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={selectedC == 3 ? styles.selectedC : {}}
                    onPress={() => {
                      setColor(`rgba(255, 255, 0 ,`)
                      setSelecteC(3)
                    }}
                  >
                    <View style={[{ backgroundColor: 'yellow' }, styles.colorpate,]}>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={selectedC == 4 ? styles.selectedC : {}}
                    onPress={() => {
                      setColor(`rgba(0, 0, 255 ,`)
                      setSelecteC(4)
                    }}
                  >
                    <View style={[{ backgroundColor: 'blue' }, styles.colorpate]}>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={selectedC == 5 ? styles.selectedC : {}}
                    onPress={() => {
                      setColor(`rgba(0, 255, 0 ,`)
                      setSelecteC(5)
                    }}
                  >
                    <View style={[{ backgroundColor: 'green', }, styles.colorpate]}>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={selectedC == 6 ? styles.selectedC : {}}
                    onPress={() => {
                      setColor(`rgba(255, 192, 203,`)
                      setSelecteC(6)
                    }}
                  >
                    <View style={[{ backgroundColor: 'pink', }, styles.colorpate]}>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => console.log("TODO FOR THE COLOR PICKER")}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ backgroundColor: 'blue', height: 20, width: 20, }}></View>
                      <View style={{ backgroundColor: 'green', height: 20, width: 20, }}></View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ backgroundColor: 'red', height: 20, width: 20, }}></View>
                      <View style={{ backgroundColor: 'pink', height: 20, width: 20, }}></View>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>

      <Button onPress={() => { setVisible(true) }} title="Tools" />

    </SafeAreaView>
  );
}


export default Draw

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorpate: {
    height: 40,
    width: 40,
  },
  selectedC: {
    borderWidth: 2,
    borderColor: 'black',
    elevation: 10,
    marginBottom: 10
  },
  tool: {
    height: 150,
    width: 50,
    opacity: 0.5
  },
  selecteT: {
    opacity: 1
  }
});
