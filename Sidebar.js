import { View, Text, Image, FlatList, TouchableOpacity ,ImageBackground } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList,

} from '@react-navigation/drawer'



const Sidebar = (props) => {
  return (
    <View style={{flex:1}}>
<DrawerContentScrollView 
{...props}
contentContainerStyle={{backgroundColor:'black'}} style={{padding:20}}>
  <ImageBackground source={require('./assets/homeimg.jpg')} style={{padding:20,height:170}}>
    <Image
    source={require('./assets/logo.png')}
    style={{height:80,width:80, borderRadius:40,marginBottom:10}}

  />
    


    <Text style={{color:'#ffff' ,fontSize:18}} >Senwell Solutions</Text>
  <Text style={{color:'#ffff'}} > Empowered by Innovation.....</Text>





</ImageBackground>
 

 <View style={{flex:1,backgroundColor:'#ffff',paddingTop:15}}>

  <DrawerItemList {...props} />
  </View>




</DrawerContentScrollView>

</View>

   
  )
}

export default Sidebar