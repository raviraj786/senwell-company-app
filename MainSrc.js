import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Src/HomeScreen';
import ContactUs from './Src/ContactUs';
import JobData from './Screens/CareerSrc/JobData';
import jobdescription from './Screens/CareerSrc/jobdescription';
import ApplyForm from './Screens/CareerSrc/ApplyForm';
import Desgin from './Screens/HomeSrc/Desgin';
import Development from './Screens/HomeSrc/Development';
import Testing_QA from './Screens/HomeSrc/Testing_QA';
import Web_Dev from './Screens/Services/Web_Dev';
import consulting from './Screens/Services/Consulting';
import Mobiledev from './Screens/Services/Mobiledev';
import DevOps from './Screens/Services/DevOps';
import Meet from './Screens/CareerSrc/Meet';



const Stack = createNativeStackNavigator();


export default function MainSrc() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='ContactUs'>

      
<Stack.Screen name="Home" component={HomeScreen} 
       options={{headerShown: false }}
      />
      <Stack.Screen name="Contact Us" component={ContactUs} />
      <Stack.Screen name="job opportunities" component={JobData} />
      <Stack.Screen name="job Description" component={jobdescription} />
      <Stack.Screen name="Apply for a job" component={ApplyForm} />
      <Stack.Screen name="MainSrc" component={MainSrc} />
      <Stack.Screen name="Desgin" component={Desgin} />
      <Stack.Screen name="Development" component={Development} />
      <Stack.Screen name="Testing & QA" component={Testing_QA} />
      <Stack.Screen name="Web Development Services" component={Web_Dev} />
      <Stack.Screen name="IT Consulting Services" component={consulting} />
      <Stack.Screen name="Moile App Development" component={Mobiledev} />
      <Stack.Screen name="DevOps Services" component={DevOps} />
      <Stack.Screen name="Meet Us" component={Meet} />
      

    </Stack.Navigator>
  </NavigationContainer>
 )
}