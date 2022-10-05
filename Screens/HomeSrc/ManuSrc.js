import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ManuSrc() {
  const navigation = useNavigation();
  return (

    <SafeAreaView >
      <View style={{ flexDirection: 'row', alignSelf: 'center' }} >

        <TouchableOpacity onPress={() => {
        navigation.navigate('Desgin');
      }}>
          <View style={styles.Viewbox}>
            <Image

              style={styles.logo}
              source={require('../../assets/logo01.png')}
            />
            <Text style={styles.textDesgin}>Design</Text>

          </View>
        </TouchableOpacity>




        <TouchableOpacity   onPress={() => {
        navigation.navigate('Development');
      }}>
          <View style={styles.Viewbox}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo2.png')}
            />
            <Text style={{fontWeight: '700', color: 'black', textAlign: 'center', padding:2, fontSize: 13 ,paddingTop:18}}>Development</Text>
          </View>
        </TouchableOpacity>



        <TouchableOpacity onPress={() => {
        navigation.navigate('Testing & QA');
      }}>
          <View style={styles.Viewbox}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo5.png')}
            />
            <Text style={{fontWeight: '700', color: 'black', textAlign: 'center', padding:2, fontSize: 13 ,paddingTop:18}}>Testing & QA</Text>
          </View>
        </TouchableOpacity>












      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Viewbox: {
    height: 160,
    width: 110,
    backgroundColor: '#fffff',
    marginTop: 40,
    borderWidth: 1,
    borderColor: "#D0D3D4",
    padding: 10,
    margin: 5
  },
  logo: {
    alignSelf: 'center',
    height: 90,
    width: 100,
    margin: 3
  },
  textDesgin: {
    fontWeight: '700', color: 'black', textAlign: 'center', padding: 10, marginTop: 15, fontSize: 13
  }
})