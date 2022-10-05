import { View, Text, TouchableOpacity, Image , } from 'react-native'
import React from 'react'
import HomePage from '../Screens/HomeSrc/HomePage'



const Company = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ width: '100%', height: 90, flexDirection: 'row', alignItems: 'center', elevation: 6, backgroundColor: '#ffff' , borderWidth:1,borderColor:'black'}}>
        <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => {
          navigation.openDrawer()
        }}>
          <Image
            source={require('../assets/manu.png')}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <View style={{flex:1}}>
            <Text style={{marginLeft:30,fontWeight:'bold',color:'#0D459D', fontSize:25 ,fontFamily: 'Roboto-Medium'}}>Senwell Solutions</Text>
            <Text style={{marginLeft:50,fontWeight:'500',color:'#4d4d4d', fontSize:16}}>Empowered by Innovation....</Text>
         </View>
<Image
         style={{ width: 30, height: 30 ,borderRadius:20 ,marginRight:30,marginTop:'-14' }}
source={require("../assets/logo.png")}
/>

  
           </View>

   
<HomePage/>





    </View>
  )
}

export default Company