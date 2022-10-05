import { View, Text ,StyleSheet , ScrollView ,ImageBackground,Image ,FlatList} from 'react-native'
import React from 'react'

export default function Mobiledev() {
  const mobileData = [
    require('../../assets/m1.png'),
    require('../../assets/m2.png'),
    require('../../assets/m3.png'),
    require('../../assets/m4.png'),
    require('../../assets/m5.png'),
    require('../../assets/m6.png'),
  ]



  return (
    <ScrollView>
    <View style={{flex:1,backgroundColor:'#ffff'}}>
 <ImageBackground 
        style={styles.Image}
        source={require('../../assets/mob1.jpg')}>
            <Text style={styles.Title}>Mobile Application Development Experts
</Text>

      </ImageBackground>


      <View style={styles.box5} >
      <Text style={styles.Title2}>Dazzle Your Users</Text>
<View style={{flexDirection:'row'}}>
  <Text  style={{fontSize:13}}>
  we have an expert team of Mobile Application Developers along with Website Development team to deliver the customized, advanced and flawless Mobile Application to your clients. Also, the Graphics Designing team don’t comprise with the ordinary designs. Then match to the updated version of the technologies and keep in view all the industry standards, to increase the engagement and convert the user into the customer.</Text>
<Text style={{color:'black', fontSize:12 ,fontWeight:'600',marginLeft:30 ,fontStyle:'italic' ,}}>
Native & Cross-Platform Apps

Mobile UI/UX Design

AR Applications

APIs and Cloud solutions

mCommerce apps
</Text>
</View>
</View>




<View style={styles.box5} >
    <Image
    style={styles.imgweb}
       source={require('../../assets/webD.png')}
    />

</View>

<View style={styles.box5} >
   <Text style={styles.Title2}>Technology We Mastered</Text>
   <Text>When deciding on programming languages, tools for another mobile app development project, we always focus on future code quality, product value for the market, and budget frames to stay in. That’s why mobile solutions we release always conform to industry standards as well as reflect every penny invested in development.</Text>
</View>



<FlatList
data={mobileData}
horizontal
showsHorizontalScrollIndicator={false}
pagingEnabled
renderItem={({item,index}) => {
return(
  <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'center' }}>
  <View style={styles.box5}>
<Image 
style={styles.ImageTool}
source={item}
/>
  </View>
</View>

)
}}
/>















<View style={styles.box5} >
    <Image
    style={styles.sart}
       source={require('../../assets/srt1.png')}
    />

</View>











</View >

</ScrollView>
  )
}

const styles = StyleSheet.create({
    Image:{
        height:200,
        width:'100%'
    },
    box5: {
        borderWidth: 1,
        backgroundColor: '#ffff',
        borderColor: '#D0D3D4',
        margin: 10,
        display: 'flex',
        padding: 5
      },
    
      imgweb:{
        height:60,
        width:320,
        alignSelf:'center'
      },
      box2:{
        display:'flex',
        borderWidth:'1',
        backgroundColor:'#ffff',
        borderColor:'#D0D3D4',
        height:70,
        width:90,
        margin:10
    },
    Title2:{
        textAlign:'center',
        fontSize:20,
        padding:10,
        fontWeight:'bold'
    },
    mob2:{
        height:300,
        width:250,
        alignSelf:'center'
    },
    Title:{
fontSize:30,
textAlign:'center',
paddingTop:40,
fontWeight:'bold',
color:'#5B2C6F',


    },
    ImageTool:{
      height:80,
      width:80
  },
  sart:{
    height:100,
    width:'100%'
  }
 
 

})