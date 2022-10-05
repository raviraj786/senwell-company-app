import { View, Text  ,StyleSheet ,ScrollView ,Image , TouchableOpacity,FlatList} from 'react-native'
import React from 'react'

export default function ImageSlider() {
  const mobileImage = [
    require('../../assets/2.jpg'),
    require('../../assets/homeimg1.jpg'),
    require('../../assets/homeimg4.png'),
    require('../../assets/homeimg2.jpg'),
    require('../../assets/mob2.png'),
    require('../../assets/homeimg8.jpg'),
    require('../../assets/homeimg9.jpg'),
  
  ]
  return (




<FlatList
data={ mobileImage}
horizontal
showsHorizontalScrollIndicator={false}
pagingEnabled
renderItem={({item,index}) => {
return(
  <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'center' }}>
  <View style={styles.box5}>
<Image 
style={styles.Image}
source={item}
/>
  </View>
</View>

)
}}
/>



   

        
        
        
            


  )
}
const styles= StyleSheet.create({
  Image:{
    height:300,
    width:370
},

})