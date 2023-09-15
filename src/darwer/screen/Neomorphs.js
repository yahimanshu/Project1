import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Neomorph, NeomorphBlur, Shadow } from 'react-native-neomorph-shadows'


const Neomorphs = () => {

  const [btn2, setbtn2] = useState(false);
  const [shw1, setShw1] = useState("#FF3333");
  const [shw2, setShw2] = useState("#3344FF");


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DDDDDD'}} >
      <Shadow
    inner = {btn2} // <- enable inner shadow
    useArt // <- set this prop to use non-native shadow on ios
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "grey",
    shadowRadius: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    width: 300,
    height: 80,
    justifyContent: 'center'
    // ...include most of View/Layout styles
  }}
>
  <Text style={{fontSize: 25, alignSelf: 'center', fontWeight: 'bold', }}>Hi this is text</Text>
</Shadow>

<TouchableOpacity onPress={() => {setbtn2(!btn2); setShw1(shw2); setShw2(shw1) }}>
  <Neomorph
    inner = {!btn2}
    // inner // <- enable shadow inside of neomorph
    // swapShadows // <- change zIndex of each shadow color
    style={{
      marginVertical: 40,
      shadowRadius: 8,
      borderRadius: 20,
      backgroundColor: '#DDDDDD',
      width: 100,
      height: 100,
    }}
  >
  </Neomorph>
</TouchableOpacity>




<Neomorph

  style={{
    shadowRadius: 3,
    borderRadius: 100,
    backgroundColor: '#DDDDDD',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <Neomorph
    style={{
      shadowRadius: 7,
      borderRadius: 100,
      backgroundColor: '#F19F9F',
      width: 180,
      height: 180,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
      <Neomorph
        style={{
          shadowRadius: 7,
          borderRadius: 50,
          backgroundColor: '#DDDDDD',
          width: 100,
          height: 100,
        }}
      />
  </Neomorph>
</Neomorph>


<Neomorph
  darkShadowColor={shw1} // <- set this
  lightShadowColor={shw2} // <- this
  style={{
    marginVertical: 20,
    shadowOpacity: 0.3, // <- and this or yours opacity
    shadowRadius: 15,
    borderRadius: 20,
    backgroundColor: '#ECF0F3',
    width: 150,
    height: 150,
  }}
/>

{/* <NeomorphBlur
  style={{
    shadowRadius: 12,
    borderRadius: 70,
    backgroundColor: '#ECF0F3',
    width: 140,
    height: 140,
  }}
/>; */}
    </View>
  )
}

export default Neomorphs

const styles = StyleSheet.create({})