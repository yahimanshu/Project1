import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductDetail } from '../../reduxtoolkit/ProductDetailSlice';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native'; 
import { ScrollView } from 'react-native-gesture-handler';

const ProductDetail = () => {

    // useFocusEffect(
    //     React.useCallback(() => {
    //     //   if (fromNavigation) {
    //     //     // This code will run when the screen gains focus after navigation
    //     //     console.log('Navigated back to this screen');
    //     //   }
          
   
    //       return () => {
    //         removeItem(0);
    //       };
    //     }) 
    //   );

    const [visible, setVisible] = useState(false);
    const [like, setlike] = useState(false);
    const [dislike, setdislike] = useState(false);

    const navigation = useNavigation();

    const dispatch = useDispatch();
    const addeditems = useSelector(state => state);
    console.log(addeditems.prodcuctdetail);
    const removeItem = (index) => {
        dispatch(removeProductDetail(index));
    };

  return (
    <View>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=> {removeItem(0); navigation.navigate("Outfits")}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: "black", marginLeft: 10, marginVertical: 10,}}>BACK</Text>
            </TouchableOpacity>

        {addeditems.cart.length != 0 ?
        <TouchableOpacity style={[styles.carticon,{marginTop: 12, position: 'absolute'}]}
        onPress={() => navigation.navigate("Cart")}>
            <Image style={styles.carticon} source={require('./cart.png')} />
            <Text style={styles.carttxt}>{addeditems.cart.length}</Text>
        </TouchableOpacity> : ''}

        </View>
      <FlatList 
            data={addeditems.prodcuctdetail}
            renderItem={({item, index}) => {
                return <View>
                        <View style={styles.itemView}>
                                <Image source={{uri:item.image}} style={styles.productsimage} resizeMode="contain"/>
                                <View style={{position: 'absolute', right: 10, top: 50, padding: 10,backgroundColor: 'white' ,borderRadius: 25, elevation: 10}}>
                                    <TouchableOpacity onPress={() => 
                                        setVisible(!visible) }>
                                    {visible == false ? 
                                        <Image style={{width: 30, height: 30, }} source={require("./heart-2.png")} /> :
                                        <Image style={{width: 30, height: 30, }} source={require("./heart.png")} />
                                    }
                                    
                                    </TouchableOpacity>
                                </View>
                            <View>
                                <ScrollView horizontal 
                                showsHorizontalScrollIndicator={false} >
                                    <Image source={{uri:item.image}} style={[styles.productsimageslider,{borderColor: "#3676e3"}]} resizeMode="contain" />
                                    <Image source={{uri:item.image}} style={styles.productsimageslider} resizeMode="contain" />
                                    <Image source={{uri:item.image}} style={styles.productsimageslider} resizeMode="contain" />
                                    <Image source={{uri:item.image}} style={styles.productsimageslider} resizeMode="contain" />
                                    <Image source={{uri:item.image}} style={styles.productsimageslider} resizeMode="contain" />
                                    <Image source={{uri:item.image}} style={styles.productsimageslider} resizeMode="contain" />
                                </ScrollView>
                                
                            </View>
                            <View style = {{marginLeft: 10}}>

                                <Text style = {styles.titletxt}>{item.title}</Text>

                                <Text style = {{fontSize: 18, color: "gray"}}>#OnlyOnHere</Text>

                                <View style={{flexDirection: 'row', marginVertical: 10}}>
                                    <View style={styles.rating}>
                                        <Text style={{color: "white", fontWeight: 'bold', marginLeft: 2}}>{item.rating.rate}</Text>
                                        <Image style={{width: 15, height: 15, marginVertical: 2, marginLeft: 6}} source={require("./star.png")} />
                                    </View>
                                    <Text style={{marginHorizontal: 5, marginVertical: 5}}>{item.rating.count} ratings</Text>
                                </View>


                                <Text style={{color: '#07a60f', fontWeight: '500'}}>On Sale Discount of ₹3,000</Text>
                                
                                
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.price} >₹{item.price}</Text>
                                    <Text style={{marginLeft: 15, textAlignVertical: 'bottom', marginBottom: 5, fontSize: 15}}>6,000</Text>
                                    <Text style={{marginLeft: 8,color: '#07a60f', fontWeight: '500', textAlignVertical: 'bottom', marginBottom: 5,}}>15% 0ff</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    <Image style={{width: 15,height: 15, marginTop: 2}} source={require('./tag.png')} />
                                    <Text style={{marginLeft: 8,color: 'black', fontWeight: '500', textAlignVertical: 'bottom', marginBottom: 5, fontSize: 16}}>{"Free Sony 4.1 speakers >"}</Text>
                                </View>
                                <View style={{flexDirection: 'row' , marginTop: 2}}>
                                    <Image style={{width: 15,height: 15, marginTop: 2}} source={require('./tag.png')} />
                                    <Text style={{marginLeft: 8,color: 'black', fontWeight: '500', textAlignVertical: 'bottom', marginBottom: 5, fontSize: 16}}>{"Extra 5% off Axis Bank Buzz credit cards >"}</Text>
                                </View>


                                <View style={{flexDirection: 'row', marginVertical: 19,}}>
                                    <View style={{flex: 1, borderRightWidth: 1, alignItems: 'center'}}>
                                        <Text style={{width: 90, textAlign: "center", fontSize: 14, fontWeight: '450',}}>Free delivery in 2 days</Text>
                                    </View>
                                    <View style={{flex: 1, borderRightWidth: 1, alignItems: 'center'}}>
                                        <Text style={{width: 120, textAlign: "center", fontSize: 14, fontWeight: '450'}}>No cost EMI ₹20000/month</Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <Text style={{width: 120, textAlign: "center", fontSize: 14, fontWeight: '450'}}>Product exchange available</Text>
                                    </View>
                                </View>


                                <View style={{width: "100%", borderBottomWidth: 1, marginBottom: 22}}></View>


                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{flex: 1, fontSize: 16,fontWeight: "600", color: "gray"}}>Ratings & Reviews</Text>
                                    <TouchableOpacity style={{justifyContent: 'flex-end', marginRight: 20, width: 120,  elevation: 5, backgroundColor: "white"}}>
                                        <Text style={{alignSelf: 'center',color: "#318ce0", fontWeight: "600", fontSize: 16, paddingVertical: 5,}}>Rate product</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{flexDirection: 'row', marginTop: 30}}>

                                    <View style={{flex: 1, borderRightWidth: 1,}}>
                                        <View style={[styles.rating,{width: 100, height: 50, borderRadius: 30, marginLeft: 15}]}>
                                            <Text style={{color: "white", fontWeight: 'bold', marginLeft: 15, marginTop: 2, fontSize: 25}}>{item.rating.rate}</Text>
                                            <Image style={{width: 28, height: 28, marginVertical: 4, marginLeft: 9}} source={require("./star.png")} />
                                        </View>
                                            <Text style={{fontSize: 16, width: 115, textAlign: 'center', marginTop: 10}}>{item.rating.count} ratings and 6 reviews</Text>
                                    </View>

                                    <View style={{flex: 1.5, borderRightWidth: 1, paddingLeft: 18}}>

                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>5</Text>
                                            <Image style={{width: 13, height: 13, marginTop: 4 ,marginLeft: 3}} source={require("./star-2.png")} />
                                            <View style={{width: 130, height: 5,marginTop: 8, marginLeft: 10 ,backgroundColor: "#E2E2E2", borderRadius: 2}}>
                                                <View style={{width: 130, height: 5 ,backgroundColor: "green", borderRadius: 2}}></View>
                                            </View>
                                            <Text style={{marginLeft: 6}}>1235</Text>
                                        </View>
                                        

                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>4</Text>
                                            <Image style={{width: 13, height: 13, marginTop: 4 ,marginLeft: 3}} source={require("./star-2.png")} />
                                            <View style={{width: 130, height: 5,marginTop: 8, marginLeft: 10 ,backgroundColor: "#E2E2E2", borderRadius: 2}}>
                                                <View style={{width: 120, height: 5 ,backgroundColor: "green", borderRadius: 2}}></View>
                                            </View>
                                            <Text style={{marginLeft: 6}}>800</Text>
                                        </View>

                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>3</Text>
                                            <Image style={{width: 13, height: 13, marginTop: 4 ,marginLeft: 3}} source={require("./star-2.png")} />
                                            <View style={{width: 130, height: 5,marginTop: 8, marginLeft: 10 ,backgroundColor: "#E2E2E2", borderRadius: 2}}>
                                                <View style={{width: 105, height: 5 ,backgroundColor: "green", borderRadius: 2}}></View>
                                            </View>
                                            <Text style={{marginLeft: 6}}>500</Text>
                                        </View>

                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>4</Text>
                                            <Image style={{width: 13, height: 13, marginTop: 4 ,marginLeft: 3}} source={require("./star-2.png")} />
                                            <View style={{width: 130, height: 5,marginTop: 8, marginLeft: 10 ,backgroundColor: "#E2E2E2", borderRadius: 2}}>
                                                <View style={{width: 30, height: 5 ,backgroundColor: "yellow", borderRadius: 2}}></View>
                                            </View>
                                            <Text style={{marginLeft: 6}}>124</Text>
                                        </View>

                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>1</Text>
                                            <Image style={{width: 13, height: 13, marginTop: 4 ,marginLeft: 3}} source={require("./star-2.png")} />
                                            <View style={{width: 130, height: 5,marginTop: 8, marginLeft: 10 ,backgroundColor: "#E2E2E2", borderRadius: 2}}>
                                                <View style={{width:40, height: 5 ,backgroundColor: "red", borderRadius: 2}}></View>
                                            </View>
                                            <Text style={{marginLeft: 6}}>189</Text>
                                        </View>

                                    </View>
                                </View>
                                

                                <View style={{flexDirection: 'row', marginTop: 30, justifyContent: "space-around"}}>

                                    <View style={{backgroundColor: "#E2E2E2", width: 60, height: 60, borderRadius: 30}}>
                                        <View style={{borderTopWidth: 3, borderRightWidth: 3, borderColor: "red" ,width: 60, height: 60, borderRadius: 30}}>
                                            <Text style={{backgroundColor: "white" , width: 52, height: 52, borderRadius: 25, alignSelf: 'center', marginTop: 2, textAlign: 'center', fontSize: 20, paddingTop: 10, color: "black", fontWeight: 'bold'}}>1.2</Text>
                                        </View>
                                    <Text style={{marginVertical: 5, marginHorizontal: 5, fontWeight: 'bold'}}>Display</Text>
                                    </View>
                                    

                                    <View style={{backgroundColor: "#E2E2E2", width: 60, height: 60, borderRadius: 30}}>
                                        <View style={{borderTopWidth: 3, borderRightWidth: 3, borderColor: "green" ,width: 60, height: 60, borderRadius: 30}}>
                                            <Text style={{backgroundColor: "white" , width: 52, height: 52, borderRadius: 25, alignSelf: 'center', marginTop: 2, textAlign: 'center', fontSize: 20, paddingTop: 10, color: "black", fontWeight: 'bold'}}>3</Text>
                                        </View>
                                    <Text style={{marginVertical: 5, width: 80,fontWeight: 'bold'}}>Perfomance</Text>
                                    </View>

                                    <View style={{backgroundColor: "#E2E2E2", width: 60, height: 60, borderRadius: 30}}>
                                        <View style={{borderWidth: 3, borderColor: "green" ,width: 60, height: 60, borderRadius: 30}}>
                                            <Text style={{backgroundColor: "white" , width: 52, height: 52, borderRadius: 25, alignSelf: 'center', marginTop: 2, textAlign: 'center', fontSize: 20, paddingTop: 10, color: "black", fontWeight: 'bold'}}>4.8</Text>
                                        </View>
                                    <Text style={{marginVertical: 5, marginHorizontal: 5, fontWeight: 'bold'}}>Camera</Text>
                                    </View>

                                    <View style={{backgroundColor: "#E2E2E2", width: 60, height: 60, borderRadius: 30}}>
                                        <View style={{borderTopWidth: 3, borderRightWidth: 3, borderBottomWidth: 3,borderColor: "yellow" ,width: 60, height: 60, borderRadius: 30}}>
                                            <Text style={{backgroundColor: "white" , width: 52, height: 52, borderRadius: 25, alignSelf: 'center', marginTop: 2, textAlign: 'center', fontSize: 20, paddingTop: 10, color: "black", fontWeight: 'bold'}}>2.5</Text>
                                        </View>
                                    <Text style={{marginVertical: 5, marginHorizontal: 5, fontWeight: 'bold'}}>Battery</Text>
                                    </View>
                                </View>


                                <View>
                                    <View style={{width: "100%", borderBottomWidth: 1, marginTop: 50}}></View>
                                    
                                    <View style={{flexDirection: 'row', marginTop: 25, marginBottom: 10}}>
                                        <View style={[styles.rating,{width: 45, height: 30 ,borderRadius: 30}]}>
                                            <Text style={{color: "white", fontWeight: 'bold', marginLeft: 2}}>5</Text>
                                            <Image style={{width: 15, height: 15, marginVertical: 2, marginLeft: 6}} source={require("./star.png")} />
                                        </View>
                                        <Text style={{marginHorizontal: 15, marginVertical: 5, fontWeight: 'bold', fontSize: 16, color: 'black'}}>As awesome as expected.</Text>
                                    </View>
                                        <Text style={{fontWeight: "600", fontSize: 15, marginBottom: 20}}>You cant ask for better phone for such low price. No problem with hardware/softwaer. Both are amazing. I'mglad i waited long for the black version.</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{fontWeight: '800'}}>Mohit jain   2 months ago</Text>
                                            
                                            <View style={{ flexDirection: 'row', marginLeft: 80}}>
                                                <TouchableOpacity onPress={() => 
                                                   {setlike(!like) 
                                                    like !=  true ? setdislike(false): '' } }>
                                                {like == false ? 
                                                    <Image style={{width: 25, height: 25, }} source={require("./like.png")} /> :
                                                    <Image style={{width: 25, height: 25, }} source={require("./like-2.png")} />
                                                }
                                                </TouchableOpacity>
                                                <Text style={{fontSize: 18}}>  12</Text>
                                            </View>

                                            <View style={{elevation: 10, flexDirection: 'row', marginLeft: 20}}>
                                                <TouchableOpacity onPress={() => 
                                                    {setdislike(!dislike)
                                                        dislike !=  true ? setlike(false): '' }  }>
                                                {dislike == false ? 
                                                    <Image style={{width: 25, height: 25, marginTop: 5}} source={require("./dislike.png")} /> :
                                                    <Image style={{width: 25, height: 25, marginTop: 5}} source={require("./dislike-2.png")} />
                                                }
                                                </TouchableOpacity>
                                                <Text style={{fontSize: 18}}>  2</Text>
                                            </View>

                                        </View>
                                
                                </View>

                                <View>
                                    <View style={{width: "100%", borderBottomWidth: 1, marginTop: 20}}></View>
                                    
                                    <View style={{flexDirection: 'row', marginTop: 25, marginBottom: 10}}>
                                        <View style={[styles.rating,{width: 45, height: 30 ,borderRadius: 30}]}>
                                            <Text style={{color: "white", fontWeight: 'bold', marginLeft: 2}}>5</Text>
                                            <Image style={{width: 15, height: 15, marginVertical: 2, marginLeft: 6}} source={require("./star.png")} />
                                        </View>
                                        <Text style={{marginHorizontal: 15, marginVertical: 5, fontWeight: 'bold', fontSize: 16, color: 'black'}}>As awesome as expected.</Text>
                                    </View>
                                        <Text style={{fontWeight: "600", fontSize: 15, marginBottom: 20}}>You cant ask for better phone for such low price. No problem with hardware/softwaer. Both are amazing. I'mglad i waited long for the black version.</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{fontWeight: '800'}}>Mohit jain   2 months ago</Text>
                                            
                                            <View style={{ flexDirection: 'row', marginLeft: 80}}>
                                                <TouchableOpacity onPress={() => 
                                                    {setlike(!like) 
                                                    like !=  true ? setdislike(false): '' }}>
                                                {like == false ? 
                                                    <Image style={{width: 25, height: 25, }} source={require("./like.png")} /> :
                                                    <Image style={{width: 25, height: 25, }} source={require("./like-2.png")} />
                                                }
                                                </TouchableOpacity>
                                                <Text style={{fontSize: 18}}>  12</Text>
                                            </View>

                                            <View style={{elevation: 10, flexDirection: 'row', marginLeft: 20}}>
                                                <TouchableOpacity onPress={() => 
                                                    {setdislike(!dislike)
                                                    dislike !=  true ? setlike(false): '' }  
                                                    }>
                                                {dislike == false ? 
                                                    <Image style={{width: 25, height: 25, marginTop: 5}} source={require("./dislike.png")} /> :
                                                    <Image style={{width: 25, height: 25, marginTop: 5}} source={require("./dislike-2.png")} />
                                                }
                                                </TouchableOpacity>
                                                <Text style={{fontSize: 18}}>  2</Text>
                                            </View>

                                        </View>
                                
                                </View>

                                <View style={{borderTopWidth: 1, borderBottomWidth: 1, marginTop: 8, flexDirection: 'row', padding: 10}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 18, flex: 1}}>All 204 Reviews</Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>{">"}</Text>
                                </View>







                                {/* <Text>{item.description}</Text> */}
                            {/* <TouchableOpacity style={styles.Cartbtn}>
                                <Text style={styles.Cartbtntxt}>Remove Item</Text>
                            </TouchableOpacity> */}
                            </View>
                        </View>
                </View>
            }} 
            />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingBottom: 20
    },
    itemView:{
        width: '100%',
        height: '100%',
        paddingTop: 5,
        paddingLeft: 5,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 10,
        elevation: 5,
        borderRadius: 10,
        paddingBottom: 50
    },
    rating:{
        backgroundColor: "#07a60f",
        flexDirection: 'row',
        padding: 5,
        width: 55,
        borderRadius: 15
    },
    productsimage:{
        width: 250,
        height: 350,
        alignSelf: 'center'
    },
    price:{
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'
    },
 
    Cartbtn:{
        width: 120,
        height: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 2
    },
    Cartbtntxt:{
        marginTop: 5,
        color: "white",
        fontSize: 16
    },
    carttxt:{
        bottom: 35,
        left: 15,
        fontSize: 15,
        color: "white",
        backgroundColor:"blue",
        textAlign: 'center',
        borderRadius:20,

    },
    productsimageslider:{
        height: 80,
        width: 80,
        borderWidth: 2,
        borderColor: "#E2E2E2",
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 3,
    },
    titletxt:{
        fontWeight: 'bold',
        fontSize: 20
    },
    Cartbtntxt:{
        marginTop: 5,
        color: "white",
        fontSize: 16
    },
    carttxt:{
        bottom: 32,
        left: 5,
        fontSize: 15,
        color: "white",
        backgroundColor:"#97e2e6",
        textAlign: 'center',
        borderRadius:20,
        width: 20
    },
    carticon:{
        width: 25,
        height: 25,
        right: 5
    }

})

export default ProductDetail

