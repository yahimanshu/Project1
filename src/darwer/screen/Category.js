import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../reduxtoolkit/ProductSlice';

const Category = () => {
    // const dispatch = useDispatch();
    // const prodcucts = useSelector(state => state);

    const apicall = () => {
      if (!apiData) {
        console.log("null");
      }else{
        console.log(apiData.data);
      }
    }

    const dispatch = useDispatch();
    const apiData = useSelector((state) => state.prodcuct); // Access the data from the store
  
    useEffect(() => {
      dispatch(fetchProducts()); // Dispatch the async thunk
    }, [dispatch]);
  
  

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