import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactUs from './ContactUs';
import Company from './Company';
import Portfolio from './Portfolio';
import Services from './Services';
import Sidebar from '../Sidebar';
import Careers from '../Screens/CareerSrc/Careers';


import Ionicons from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();


export default function HomeScreen() {
  return (
    <Drawer.Navigator  drawerContent={props => <Sidebar {...props} />}> 




<Drawer.Screen
        name="Home"
        component={Company}
        options={{
          headerShown: false ,
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

<Drawer.Screen
        name="Services"
        component={Services}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="server-sharp" size={22} color={color} />
          ),
        }}
      />
<Drawer.Screen
        name="PortfIlio"
        component={Portfolio}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="search-sharp" size={22} color={color} />
          ),
        }}
      />
<Drawer.Screen
        name="Careers"
        component={Careers}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />







<Drawer.Screen
        name="Contact"
        component={ContactUs}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="contract-outline" size={22} color={color} />
          ),
        }}
      />





  
    
    
  </Drawer.Navigator>
  )
}