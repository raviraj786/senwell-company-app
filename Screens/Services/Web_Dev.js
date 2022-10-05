import { View, Text ,StyleSheet  ,ScrollView ,Image ,ImageBackground} from 'react-native'
import React from 'react'

export default function Web_Dev() {
  return (
   <ScrollView>
    <View style={{flex:1,backgroundColor:'#ffff'}}>
 <ImageBackground 
        style={styles.Image}
        source={require('../../assets/homeimg2.jpg')}>
            <Text style={styles.Title}>Expert Web Development Services
</Text>

      </ImageBackground>




      <View style={styles.box5} >
      <Text style={styles.Title2}>Impress new Clients</Text>
<View style={{flexDirection:'row'}}>
  <Text  style={{fontSize:13}}>
  We work towards both your short- and long-term goals. We quickly identify, build, and enable those features that will get you the most leads and prospects in the shortest possible time.</Text>
<Text style={{color:'black', fontSize:12 ,fontWeight:'600',marginLeft:30 ,fontStyle:'italic' ,}}>
corporate websites

eCommerse Platforms

Sass & cloud Solutions

media Portals
</Text>
</View>
</View>

<View style={styles.box5} >
    <Image
    style={styles.imgweb}
       source={require('../../assets/webD.png')}
    />

</View>





<View style={styles.box5}>

<Text style={styles.Title2}>Our Technology Expertise</Text>
<Text>Our knowledge extends beyond Angular development outsourcing. Our knowledge and experience span practically every programming language, framework, and library, both established over time and recently released by industry leaders such as Google and Microsoft.</Text>
</View>


      
<View style={styles.box5}>
<View style={{flexDirection:'row',alignSelf:'center'}}>



<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/js1.png')}
/>
</View>

<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/t2.png')}
/>
</View>

<View style={{flexDirection:'row',alignSelf:'center'}}>
<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/t4.png')}
/>

</View>

<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/t5.png')}
/>
</View>

</View>






</View>





</View>



</View>




   </ScrollView>
  )
}

const styles = StyleSheet.create({
    Image:{
        width:'100%',
        height:200,
        alignItems:'center'
    
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
            width:310,
            alignSelf:'center'
          },
          box2:{
            display:'flex',
            borderWidth:'1',
            backgroundColor:'#ffff',
            borderColor:'#D0D3D4',
            height:80,
            width:70,
            margin:5
        },
        Title2:{
            textAlign:'center',
            fontSize:20,
            padding:10,
            fontWeight:'bold'
        },
        ImageTool:{
          height:80,
          width:80
      },
      Title:{
        fontSize:30,
        textAlign:'center',
        paddingTop:40,
        fontWeight:'bold',
        color:'#F4D03F',
        
        
            },
})