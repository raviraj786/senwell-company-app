import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Careers({ navigation }) {
  return (
    <ScrollView>


      <View style={{ flex: 1, backgroundColor: '#ffff', textAlign: 'center' }}>

        
          <Text style={styles.titletext}>Let’s build industry-changing projects together!</Text>
        





           

        <View>


  

     <TouchableOpacity onPress={() => navigation.navigate('Meet Us')}>
            <View style={styles.box5}>
              <Image
                style={styles.tinyLogo}
                source={require('../../assets/meet2.png')}
              />

              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30' }}>Meet Us</Text>
              <Text style={{ fontWeight: '600' }}>Learn about the culture here at Senwell Solutions</Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('job opportunities')}>
            <View style={styles.box5}>
              <Image
                style={styles.tinyLogo}
                source={require('../../assets/job.png')}
              />

              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20' }}>Job openings</Text>
              <Text style={{ fontWeight: '600' }}>Find a suitable job that matches your skills</Text>
            </View>
          </TouchableOpacity>

        </View>















        <View style={styles.box5}>
          <Text style={styles.title3}>We Offer....</Text>


          <View style={styles.box5} >
            <Text style={styles.title3}>Dynamic career</Text>
            <Text>Utilize your skills and grab opportunities to build a successful career doing what you love.</Text>
          </View>


          <View style={styles.box5} >
            <Text style={styles.title3}>Personal growth</Text>
            <Text>Pursue your individual goals with a team that supports your desire for self-refinement.</Text>
          </View>


          <View style={styles.box5}>
            <Text style={styles.title3}>Learning & mentorship</Text>
            <Text>Improve your skills by working closely with experienced professionals on diverse projects.</Text>
          </View>

          <View style={styles.box5}>
            <Text style={styles.title3}>Latest technologies</Text>
            <Text>Face new challenges and implement your ideas using innovative practices and technologies.</Text>
          </View>


      












          <View style={ styles.Image}>

          <Image
                style={styles.tinyLogo}
                source={require('../../assets/img10.png')}
              />

           </View>
 <View style={styles.sideBox}>
 <Text>
 Get hired in Easy Steps
 </Text>
  
 </View>






        </View>





      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titletext: {

    fontFamily: 'NotoSans',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 10

  },
  titletext2: {
    fontFamily: 'NotoSans',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  box: {

    height: 160,
    width: 160,
    backgroundColor: '#fffff',
    marginTop: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: "#D0D3D4"
  },


  tinyLogo: {
    width: '100%',
    height: 100,
    alignSelf: 'center',

  },
  offerText: {
    fontSize: 17,
    color: 'black',
    fontWeight: '700',





  },
  box5: {
    borderWidth: 1,
    backgroundColor: '#ffff',
    borderColor: '#D0D3D4',
    margin: 20,
    display: 'flex',
    padding: 10
  },


  title3: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10
  },
  mainImg:{
    width:200,
    height:300
    
  },
  Image:{
    alignSelf:'flex-start'
  },
  sideBox:{
  alignSelf:'flex-end',
  marginTop:'-20'
  }
})