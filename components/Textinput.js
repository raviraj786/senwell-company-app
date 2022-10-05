import { View, Text  ,TextInput ,StyleSheet} from 'react-native'
import React from 'react'

export default function Textinput() {
  return (
    <View>
      <TextInput
      placeholder='Enter Name'
      styles={style.TextInput}
      />
    </View>
  )
}

const style = StyleSheet.create({
    TextInput:{
        borderWidth:1,
        backgroundColor:'black',
        alignSelf:'center',
        padding:10
    }
     
})