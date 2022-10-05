import { View, Text  ,StyleSheet ,ScrollView ,Image , TouchableOpacity,FlatList} from 'react-native'
import React from 'react'

export default function CompanySlider() {
  const mobileImage = [
    require('../../assets/a1.jpg'),
    require('../../assets/a2.png'),
    require('../../assets/a3.webp'),
    require('../../assets/a4.jfif'),
    require('../../assets/a5.png'),
    require('../../assets/a6.png'),
    require('../../assets/a7.png'),
  
     {Testimonal:"I’ve been working with Senwell Solutions for several outsourcing projects for clients in Canada and US, and I have to say that the guys here deliver really great work and oftentimes outperform the clients’ own development teams. I’ve never met such productivity before and that’s probably one of the biggest, although not the only one advantage of the company.." ,
       name:"Name: Kevin Atom, Property Hatch Ltd, United State"   },
     {Testimonal:"They are incredibly client-focused, so we saw them as partners rather than service suppliers. Applying industry cutting edge- practices and knowledge of travel, real estate, technology, and software business domain they have managed to deliver the project on time and of the highest quality.." ,
       name:"Name: Derick, Hatchster Ltd. UK"   },
     {Testimonal:"We are enormously satisfied with Senwell Solutions as contractor. Highly responsive team with profound understanding of subject matter and really very, very fast code delivery that is particularly important for our travel business.." ,
       name:"Name: Nicolo F, Italy"   },





  ]
  return (




<FlatList
data={ mobileImage}
horizontal
showsHorizontalScrollIndicator={false}
pagingEnabled
renderItem={({item,index}) => {
return(
    <View>
    <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'center' }}>
  <View style={styles.box5}>
<Image 
style={styles.Image}
source={item}
/></View></View>
</View>
)
}}
/>










   

        
        
        
            


  )
}
const styles= StyleSheet.create({
  Image:{
    height:100,
    width:120
},
box5: {
    borderWidth: 1,
    backgroundColor: '#ffff',
    borderColor: '#D0D3D4',
    margin: 10,
    display: 'flex',
    padding: 5,
    
  },

})