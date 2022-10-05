import { StyleSheet, Text, View ,Image ,ScrollView ,ImageBackground} from 'react-native'
import React from 'react'

export default function Services() {
  return (
    <View style={{flex:1}}>
      <ScrollView>
  <ImageBackground 
            source={require('../assets/homeimg.jpg')}
            style={{ width:'100%', height: 150 }}
          >
          <Text style={{color:'#ffff',fontWeight:'bold',fontSize:20,alignSelf:'center',justifyContent:'center',paddingTop:50}}>Services</Text>
</ImageBackground>













<View style={styles.box5}>
  <View style={{flexDirection:'row'}}>
<Image
style={{width:50 ,height:60 ,padding:10 ,marginLeft:15}}
source={require('../assets/web.png')}
/>
<Text style={{alignSelf:'center',justifyContent:'center',marginLeft:30,fontSize:18 ,fontWeight:'bold'}}>Custom Software Development Services</Text>
</View>
</View>

<View style={styles.box5}>
  <View style={{flexDirection:'row'}}>
<Image
style={{width:50 ,height:60 ,padding:10 ,marginLeft:15}}
source={require('../assets/logo2.png')}
/>
<Text style={{alignSelf:'center',justifyContent:'center',marginLeft:30,fontSize:18 ,fontWeight:'bold'}}>Software QA Services</Text>
</View>
</View>

<View style={styles.box5}>
  <View style={{flexDirection:'row'}}>
<Image
style={{width:50 ,height:60 ,padding:10 ,marginLeft:15}}
source={require('../assets/logo1.png')}
/>
<Text style={{alignSelf:'center',justifyContent:'center',marginLeft:30,fontSize:18 ,fontWeight:'bold'}}>IT Consulting Services</Text>
</View>
</View>

<View style={styles.box5}>
  <View style={{flexDirection:'row'}}>
<Image
style={{width:50 ,height:60 ,padding:10 ,marginLeft:15}}
source={require('../assets/teem2.png')}
/>
<Text style={{alignSelf:'center',justifyContent:'center',marginLeft:30,fontSize:18 ,fontWeight:'bold'}}>Dedicated Development Teams</Text>
</View>
</View>


<View style={styles.box5}>
  <View style={{flexDirection:'row'}}>
<Image
style={{width:50 ,height:60 ,padding:10 ,marginLeft:15}}
source={require('../assets/logo01.png')}
/>
<Text style={{alignSelf:'center',justifyContent:'center',marginLeft:30,fontSize:18 ,fontWeight:'bold'}}>UI/UX Design</Text>
</View>
</View>




<View style={styles.box5}>
  <View style={{flexDirection:'row'}}>
<Image
style={{width:50 ,height:60 ,padding:10 ,marginLeft:15}}
source={require('../assets/mob2.png')}
/>
<Text style={{alignSelf:'center',justifyContent:'center',marginLeft:30,fontSize:18 ,fontWeight:'bold'}}>Mobile Application Development Experts</Text>
</View>
</View>




<View style={styles.box5}>
  <View style={{flexDirection:'row'}}>
<Image
style={{width:50 ,height:60 ,padding:10 ,marginLeft:15}}
source={require('../assets/img8.jpg')}
/>
<Text style={{alignSelf:'center',justifyContent:'center',marginLeft:30,fontSize:18 ,fontWeight:'bold'}}>Product Development Solutions We Deliver</Text>
</View>
</View>




<View style={styles.box5}>
  <View style={{flexDirection:'row'}}>
<Image
style={{width:50 ,height:60 ,padding:10 ,marginLeft:15}}
source={require('../assets/logo5.png')}
/>
<Text style={{alignSelf:'center',justifyContent:'center',marginLeft:30,fontSize:18 ,fontWeight:'bold'}}>MVP Development Services</Text>
</View>
</View>


<View style={styles.box5}>
  <View style={{flexDirection:'row'}}>
<Image
style={{width:50 ,height:60 ,padding:10 ,marginLeft:15}}
source={require('../assets/devops.png')}
/>
<Text style={{alignSelf:'center',justifyContent:'center',marginLeft:30,fontSize:18 ,fontWeight:'bold'}}>DevOps Services For SMEs and Enterprises</Text>
</View>
</View>

















          </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
 box5: {
    borderWidth: 1,
    backgroundColor: '#ffff',
    borderColor: '#D0D3D4',
    margin: 20,
    display: 'flex',
    padding: 10
  },
})