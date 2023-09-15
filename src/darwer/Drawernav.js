import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomDrawer';
import Main from './screen/Main';
import Outfits from './screen/Outfits';
import Packing from './screen/Packing';
import Feedback from '../bottom/screen/Feedback';
import Login from '../screen/Login';
import Videoplay from './screen/Videoplay';
import Category from './screen/Category';
import Allitems from './screen/Allitems';
import Swap from './screen/Swap';
import Neomorphs from './screen/Neomorphs';
import Textreco from './screen/Textreco';
import VideoCrop from './screen/VideoCrop';



const Drawer = createDrawerNavigator();

const Drawernav = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Outfits" component={Outfits} />
        <Drawer.Screen name="Packing" component={Packing} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="Category" component={Category} />
        <Drawer.Screen name='Videoplay' component={Videoplay} />
        <Drawer.Screen name='Allitems' component={Allitems} />
        <Drawer.Screen name='Swap' component={Swap} />
        <Drawer.Screen name='Neomorphs' component={Neomorphs} />
        <Drawer.Screen name='Textreco' component={Textreco} />
        <Drawer.Screen name='VideoCrop' component={VideoCrop} />
        <Drawer.Screen name='Login' component={Login} />
    </Drawer.Navigator>
  )
}

export default Drawernav