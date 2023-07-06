import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, Image, Alert } from 'react-native';

const Home = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const result = navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
    return result;
  }, [navigation])

  return (
    <View>
      <View style = {styles.conta}>
        <View>
        <Text style={styles.contatxt}>LOREM IPSUM</Text>
        <Text style={{marginLeft: 25,fontSize: 20, color: 'white'}}>50% OFF</Text>
        </View>
      <Image style={styles.contaimg} source={require('./img/clean.png')}/>
      </View>
      
      <ScrollView Style={styles.container}>

        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.card} >
              <Image style={styles.cardimg}  source={require('./img/baby.png')}/>
              <Text style={styles.cardtxt}>Babysitter</Text>
              <Text style={styles.cardtxt2}>581 persons</Text>
            </View>
            <View style={styles.card} >
            <Image style={styles.cardimg}  source={require('./img/beauty.png')}/>
              <Text style={styles.cardtxt}>Beauty</Text>
              <Text style={styles.cardtxt2}>581 persons</Text>
            </View>
          </View>


          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.card} >
              <Image style={styles.cardimg}  source={require('./img/electrician.png')}/>
              <Text style={styles.cardtxt}>Electrician</Text>
              <Text style={styles.cardtxt2}>581 persons</Text>
            </View>
            <View style={styles.card} >
            <Image style={styles.cardimg}  source={require('./img/food.png')}/>
              <Text style={styles.cardtxt}>Food</Text>
              <Text style={styles.cardtxt2}>581 persons</Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.card} >
              <Image style={styles.cardimg}  source={require('./img/grocery.png')}/>
              <Text style={styles.cardtxt}>Grocery</Text>
              <Text style={styles.cardtxt2}>581 persons</Text>
            </View>
            <View style={styles.card} >
            <Image style={styles.cardimg}  source={require('./img/machanic.png')}/>
              <Text style={styles.cardtxt}>Machanic</Text>
              <Text style={styles.cardtxt2}>581 persons</Text>
            </View>
          </View>


          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.card} >
              <Image style={styles.cardimg}  source={require('./img/taxi.png')}/>
              <Text style={styles.cardtxt}>Taxi</Text>
              <Text style={styles.cardtxt2}>581 persons</Text>
            </View>
            <View style={styles.card} >
            <Image style={styles.cardimg}  source={require('./img/massage.png')}/>
              <Text style={styles.cardtxt}>Massage</Text>
              <Text style={styles.cardtxt2}>581 persons</Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.card} >
              <Image style={styles.cardimg}  source={require('./img/baby.png')}/>
              <Text style={styles.cardtxt}>Babysitter</Text>
              <Text style={styles.cardtxt2}>581 persons</Text>
            </View>
            <View style={styles.card} >
            <Image style={styles.cardimg}  source={require('./img/beauty.png')}/>
              <Text style={styles.cardtxt}>Beauty</Text>
              <Text style={styles.cardtxt2}>581 persons</Text>
            </View>
          </View>
        </ScrollView>
        <Text>Hello</Text>
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  conta:{
    marginHorizontal: 18,
    backgroundColor: '#1b75f0',
    height: 120,
    width: "92%",
    borderRadius: 10,
    flexDirection: 'row'
  },
  contatxt:{
    fontSize: 20,
    marginTop: 40,
    color: 'white',
    marginLeft: 25
  },
  contaimg:{
    height: 100,
    width: 150,
    resizeMode: 'stretch',
    marginTop: 10,
    marginLeft: 30
    
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  card:{
    flex: 1, 
    backgroundColor: '#00bfff', 
    height: 140,
    marginHorizontal: 25,
    marginVertical: 25,
    borderRadius: 15,
    elevation: 5,
  },
  cardimg:{
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginTop: 20
  },
  cardtxt:{
  fontSize: 18,
  alignSelf: 'center',
  marginVertical: 4
},
cardtxt2:{
  fontSize: 13,
  alignSelf: 'center',
  }
});

