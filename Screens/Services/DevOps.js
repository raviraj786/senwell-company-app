import { View, Text ,StyleSheet  ,ScrollView ,Image ,ImageBackground} from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

export default function DevOps() {
  return (
   <ScrollView>
    <View style={{flex:1,backgroundColor:'#ffff'}}>
 <ImageBackground 
        style={styles.Image}
        source={require('../../assets/devops.jpg')}>
            <Text style={styles.Title}>DevOps Services For SMEs and Enterprises
</Text>

      </ImageBackground>




      <View style={styles.box5} >
      <Text style={{fontWeight:'600',fontSize:15}}>Serve Your Users</Text>
<View style={{flexDirection:'row'}}>
  <Text  style={{fontSize:13}}>DevOps allows teams to deliver more often while still maintaining a balance of quality and innovation. Give your customers the benefit of regular updates, and your stakeholders the benefit of a shorter time-to-market. Collaborate with us to enhance your</Text>
<Text style={{color:'black', fontSize:12 ,fontWeight:'600',marginLeft:10 ,fontStyle:'italic' ,}}>
Deployment & Delivery process

Scalability using cloud services

Global availability of your product

Release frequency
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
<Text style={styles.Title2}>Our Technology Expertise</Text>
<Text> Sewell Solutions employs over 280 engineers that are experts in specialised technologies, programming languages, frameworks, and libraries. We go beyond just producing solid code, concentrating on the final product that will help your company reach its goals.</Text>
</View>



      

<View style={{flexDirection:'row',alignSelf:'center',justifyContent:'center' }}>


<View style={styles.box5}>
<Image
style={styles.ImageTool}
source={require('../../assets/dev1.jpeg')}
/>
<Text style={styles.texttool}>Jenkins</Text>
</View>





<View style={styles.box5}>
<Image
style={styles.ImageTool}
source={require('../../assets/dev2.jfif')}
/>
<Text style={styles.texttool}>Dockers</Text>
</View>



<View style={styles.box5}>
<Image
style={styles.ImageTool}
source={require('../../assets/dev3.png')}
/>
<Text style={styles.texttool}>Ansible</Text>
</View>



<View style={styles.box5}>
<Image
style={styles.ImageTool}
source={require('../../assets/dev4.png')}
/>
<Text style={styles.texttool}>Gitlab CI</Text>
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
            height:60,
            width:60,
            margin:5
            
        },
        Title2:{
            textAlign:'center',
            fontSize:20,
            padding:10,
            fontWeight:'bold'
        },
        ImageTool:{
            height:50,
            width:50
        },
        Title:{
              justifyContent:'center',
              textAlign:'center',
              color:'#ffff',
              fontSize:20,
              fontWeight:'bold',
              marginTop:50
        }
})
  