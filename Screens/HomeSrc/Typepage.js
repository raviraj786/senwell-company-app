import { View, Text ,StyleSheet ,Image} from 'react-native'
import React from 'react'

export default function Typepage() {
  return (
    <View>
    <View style={{flexDirection:'row'}}>
    <Image 
         style={styles.logo}
        source={require('../../assets/project.png')}
      />


    <Text style={{marginTop:20 ,color:'black', fontSize:20 ,fontWeight:'800',marginLeft:18}}>
    Start fast. Finish
confidently.
    </Text>

</View>


    </View>
  )
}

const styles = StyleSheet.create({
    Viewbox: {
      height: 160,
      width: 110,
      backgroundColor: '#fffff',
      marginTop: 40,
      margin: 10,
      borderWidth: 1,
      borderColor: "#D0D3D4",
      borderRadius:10
    },
    logo:{
height:170,
width:170,
padding:10,
marginTop:10
}

})