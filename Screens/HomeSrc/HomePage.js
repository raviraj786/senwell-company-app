import { View, Text  ,StyleSheet ,Image ,TouchableOpacity ,FlatList ,Divider ,ImageBackground ,ScrollView} from 'react-native'
import React ,{useEffect, useState} from 'react'
import ManuSrc from '../HomeSrc/ManuSrc'
import ImageSlider from './ImageSlider'
import Typepage from './Typepage'
import CompanySlider from './CompanySlider'
import Testimonal from './Testimonal'
        
export default function HomePage() {

 
    const [showText ,setshowText] = useState('')

     useEffect(() => {
   const intervel = setInterval(() => {
    setshowText((showText) => !showText)
},500)
return () => {
        clearInterval(intervel)
    }
    } ,[])



  return (

<ScrollView>

    <View style={styles.container}>


<View style={{height:150}}>
 <Text style={styles.titletext}>Wellcome </Text>
     <Text style={styles.titletext}>to</Text>
     <View>
  <Text style={[styles.titletext2 ,
 {display: showText ? 'none' :'flex'}]
      }>Senwell Solutions.</Text> 
    </View>  
  </View>


 <View>
<View style={{position:'relative',display:'flex'}}>
 <ImageSlider/>
</View>
</View>

<View>
<Text style={styles.title}>We Help With</Text>
<ManuSrc/>
  </View>


 <View>
<Typepage/>
 </View>

<View style={{backgroundColor:'blue',flexDirection:'row',padding:10 ,marginTop:20}}>
<Text style={{color:'#ffff' ,fontSize:15 ,padding:10}}>Ready to start on your development or testing project? We are!</Text>


<TouchableOpacity style={{backgroundColor:'#ffff' ,display:'flex' ,height:20 , marginTop:30}}>
  <Text style={{textAlign:'center'}}>Get in Tach</Text>
</TouchableOpacity>
</View>

<View>
<Text style={styles.title}>Some of our clients</Text>
<CompanySlider/>

<Text style={styles.title}>Testimonal</Text>
<Testimonal/>
</View>


















  
</View>
</ScrollView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#ffff',
       
    },
    titletext:{

        fontFamily: 'NotoSans',
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold'
    },
    titletext2:{
        fontFamily: 'NotoSans',
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        alignSelf:'center',
        color:'black'
    },
    mangmentImg:{
        paddingTop:50,
width:300,
height:250,
display:'flex',
marginTop:100,
    },
    title:{fontWeight:'bold',fontSize:20,color:'black',marginLeft:10 ,marginTop:20}

})