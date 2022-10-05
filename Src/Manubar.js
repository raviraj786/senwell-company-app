import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Manubar() {
  return (
    <View style={styles.container}>
      <Text style>Manubar</Text>
      <Text>Manubar</Text>
      <Text>Manubar</Text>
      <Text>Manubar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'black',
       
       }

    })