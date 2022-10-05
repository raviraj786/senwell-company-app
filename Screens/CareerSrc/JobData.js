import { View, Text ,StyleSheet , TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function JobData({navigation}) {
  return (
    <View style={styles.cantainer}>


    <View>
      <Text style={styles.title}>We are Looking out for you!</Text>
      <Text style={styles.subtitle}>Find a job that you are looking for and let’s grow each other</Text>
     </View>















<View style={ { borderWidth:1,backgroundColor:'#ffff',borderColor:'#D0D3D4' ,margin:20, display:'flex'}}>

<View style={{margin:10}}>
   
    <Ionicons name="person" size={22} color={color} 
    style={{ alignSelf:'flex-end', position:'absolute',marginTop:10}}
    />
  <Text style={{fontWeight:'600',color:'black'}}>Node.js Developer</Text>
    
    

    <Text  style={{fontWeight:'600',color:'black' ,margin:5}}>Opening (10)</Text> 

    <Ionicons name="location" size={22} color={color}/>
    <Text  style={{fontWeight:'600',color:'black',marginTop:-20 ,marginLeft:30}}>Kharadi, Pune - 411014</Text> 
    
    <TouchableOpacity onPress={() => navigation.navigate('job Description')} >
    <Text  style={{color:'blue' ,textAlign:'right',marginTop:-20}}>Learn more</Text> 
    </TouchableOpacity>
    
    </View>
</View>







    </View>
  )
}

const styles = StyleSheet.create({
    cantainer:{
        flex:1,
        alignContent:'flex-start',
        backgroundColor:'#ffff'

    },
    title:{
        fontFamily: 'NotoSans',
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
        paddingTop:10
    },
    subtitle:{
        fontSize:'20',
        textAlign:'left',
        color:'black',
        padding:10,

    }
})