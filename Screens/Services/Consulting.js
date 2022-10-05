import { View, Text ,StyleSheet  ,ScrollView ,Image ,ImageBackground} from 'react-native'
import React from 'react'

export default function consulting() {
  return (
   <ScrollView>
    <View style={{flex:1,backgroundColor:'#ffff'}}>
 <ImageBackground 
        style={styles.Image}
        source={require('../../assets/img8.jpg')}>
            <Text style={styles.Title}>IT Consulting Services
</Text>

      </ImageBackground>




      <View style={styles.box5} >
      <Text style={styles.Title2}>Start Development Quickly</Text>
<View style={{flexDirection:'row'}}>
  <Text  style={{fontSize:13}}>
    Don’t worry if you don’t have any technical background, we here are ready to help you. Our IT consulting services can help you. we provide outstanding services that can improve you to determine your idea’s viability, create a development roadmap, and assist you in creating a prototype or MVP that will help you validate your ideas.</Text>
<Text style={{color:'black', fontSize:12 ,fontWeight:'600',marginLeft:30 ,fontStyle:'italic' ,}}>
CTO as a Service
Market research
Creating development roadmaps
Guided MVP creation
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

<Text style={styles.Title2}>Tech Stack</Text>
<Text>One of the competent services we provide is IT consulting outsourcing. Senwell employs over 280 devoted engineers who are experts in technologies, programming languages, frameworks, and libraries. We go beyond just designing efficient code, concentrating on the final product that will assist your company reach its goals.</Text>
</View>


      
<View style={styles.box5}>
<View style={{flexDirection:'row',alignSelf:'center'}}>
<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/t1.png')}
/>

</View>

<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/t2.png')}
/>

</View>

<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/t3.png')}
/>

</View>
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

<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/t6.png')}
/>

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
        ImageTool:{
          height:80,
          width:80
      },
      Title:{
        fontSize:30,
        textAlign:'center',
        paddingTop:40,
        fontWeight:'bold',
        color:'red',
        
        
            },
})