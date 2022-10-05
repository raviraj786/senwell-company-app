import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet, Image } from 'react-native'

const { width } = Dimensions.get('window')

export default class OurService extends Component {
  render() {
    return (


      <View style={styles.container2}>
        <Text style={styles.title2}>Our past projects</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/Lotto1.png')}
        />
        <Text style={styles.title2}>LottoSocal</Text>
        <Text style={styles.detail}>
        

        </Text>
   
        
      </View>


    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10
  },
  container2: {
    backgroundColor: 'black',
    marginLeft: 5,
    marginRight: 5,

  },
  tinyLogo: {
    height: '200px',
    width: '350px',
    alignSelf: 'center',
    margin: 20

  },
  title2: {
    color: '#ffff',
    fontSize: 25,
    fontWeight: '600',
    alignSelf: 'center',
    padding: 10,
    paddingTop: 20
  },
  scrollViewContainerStyle: {
  display:'flex'

  },
  detail:{
     color: '#ffff',
  
  

  },
  detail2:{
    color: '#ffff',
    
  }
})