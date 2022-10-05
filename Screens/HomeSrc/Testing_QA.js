import { View, Text  ,ImageBackground ,StyleSheet ,Image ,ScrollView} from 'react-native'
import React from 'react'

const Testing_QA = () => {
  return (
    <ScrollView>
    <View>
     
      <ImageBackground 
        style={styles.Image}
        source={require('../../assets/img8.jpg')}>
            <Text style={styles.Title}>Software QA Services
</Text>

      </ImageBackground>

      <Text style={styles.Title2}>Types Of Testing
</Text>
<Text style={styles.Title3}>Over years of delivering software QA services, we’ve matured our processes and built a strong expertise in various types of manual and automated testing.

</Text>



<View>
<Text style={styles.Title2}>Quality Assurance Technologies
</Text>

<View style={{flexDirection:'row',alignSelf:'center'}}>
<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/ttt1.png')}
/>
<Text style={styles.texttool}>Postman

</Text>
</View>


<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/ttt2.png')}
/>
<Text style={styles.texttool}>Selenioum
</Text>
</View>


<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/ttt3.png')}
/>
<Text style={styles.texttool}>BrowserStack</Text>
</View>

</View>






<View style={{flexDirection:'row',alignSelf:'center'}}>
<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/tt4.webp')}
/>
<Text style={styles.texttool}>JUnit</Text>
</View>



<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/ttt5.jfif')}
/>
<Text style={styles.texttool}>Jmeter</Text>
</View>
</View>
</View>


<View style={styles.box5}>
<Text style={{color:'black', fontSize:18 ,fontWeight:'700' ,textAlign:'center'}}>Quick start. Quality finish.</Text>
<View style={{flexDirection:'row'}}>
    <Image 
         style={styles.logo}
        source={require('../../assets/p2.jpg')}
      />

<Text>When you come to Senwell Solutions, you get a reliable tech partner business to turn to time and time again. Professional software QA services can assist you to streamline your SDLC procedures and get complete control over your project's code quality.</Text>
</View>

</View>







<View style={styles.box5} >
<Text style={{color:'black', fontSize:18 ,fontWeight:'700',textAlign:'center'}}>Our QA Process</Text>
<View style={{flexDirection:'row',alignSelf:'flex-start'}}>
    <Image 
         style={styles.logo}
        source={require('../../assets/p3.png')}
      />


<Text>We default to Agile as an industry-standard development model. However, because every software requires a different methodology and some businesses demand a specialized validation process, we also work with Waterfall, V-Model, Spiral, and Iterative models.</Text>
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
        Title:{
            alignSelf:'center',
            paddingTop:60,
            fontWeight:'bold',
            fontSize:30,
            color:'#ffff'
             
        
        
        },
        Title2:{
            textAlign:'center',
            fontSize:20,
            padding:10,
            fontWeight:'bold'
        },
        Title3:{
            textAlign:'center',
            padding:10,
            fontWeight:'600'
        },
        Title4:{
            padding:20,
            fontWeight:'bold',
            alignSelf:'flex-start',
            padding:10,
            fontSize:'20'
        
        },
        box:{
            display:'flex',
            borderWidth:'1',
            backgroundColor:'#1F45FC',
            borderColor:'#ffff',
            height:70,
            width:100,
            margin:20
        },
        Title5:{
            color:'#ffff',
            textAlign:'center',
            padding:3,
            fontSize:15,
            fontWeight:'500'
        },
        ImageTool:{
            height:50,
            width:50,
            alignSelf:'center'
        },
        box2:{
            display:'flex',
            borderWidth:'1',
            backgroundColor:'#ffff',
            borderColor:'black',
            height:70,
            width:80,
            margin:10
        },
        texttool:{
            textAlign:'center',
            padding:2,
            fontSize:'18',
            fontWeight:'600'
        },
        logo:{
          height:150,
          width:150,
          padding:5
        
          
          },
          box5: {
            borderWidth: 1,
            backgroundColor: '#ffff',
            borderColor: '#D0D3D4',
            margin: 10,
            display: 'flex',
            padding: 5
          },
        
        
})

export default Testing_QA