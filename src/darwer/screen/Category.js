import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../reduxtoolkit/ProductSlice';

const Category = () => {
    const dispatch = useDispatch();
    const prodcucts = useSelector(state => state);

    const apicall = () => {
        dispatch(fetchProducts)
        console.log(prodcucts)
    }

  return (
    <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', flex: 1}}> 
      <Text style={{fontSize: 30, borderWidth: 1, paddingHorizontal: 20, paddingVertical: 10}} onPress={()=> { 
        apicall()
        }} >
            Api call
            </Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})