import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import OurService from '../components/OurService'

export default function Portfolio() {

  

  return (
    <ScrollView>
      <View style={styles.container}>

        <View>

          <Text style={styles.title}>OUR SERVICES</Text>








          <View style={styles.box5}>




            <Image
              style={styles.tinyLogo}
              source={require('../assets/img.png')}
            />
            <Text style={styles.title3}>Cronage</Text>
            <Text style={styles.subTitle}>Technologies: Angular, Bootstrap, HTML, CSS </Text>
            <Text style={styles.detail}>A well Design website for the manufacturing industry called Cronage</Text>
          </View>
        </View>

        <View style={styles.box5}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/img2.png')}
          />

          <Text style={styles.title3}>Fooz</Text>
          <Text style={styles.subTitle}>Technologies: React, Redux, Node.js, Bootstrap</Text>
          <Text style={styles.detail}>The UAE-born, play-to-win online platform introduced by Arab Millionaire is offering participants the chance to “Dream Big, Give More” with the largest prizes in the Arab World.
          </Text>
        </View>




        <View style={styles.box5}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/port3.png')}
          />

          <Text style={styles.title3}>Fork-Freight</Text>
          <Text style={styles.subTitle}>Technologies: Angular, Asp.Net, Node.</Text>
          <Text style={styles.detail}>Web application for transportation Industry.Fork Freight is an app which provides high-end, affordable services that will help carriers, shippers, brokers, and dispatchers grow their business.
          </Text>
        </View>


        <View style={styles.box5}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/port4.png')}
          />

          <Text style={styles.title3}>LottoSocial</Text>
          <Text style={styles.subTitle}>Technologies: Angular, Ionic, Node.js, Firebase</Text>
          <Text style={styles.detail}>Web Application to create and manage online lottery syndicates. Increase your chances of winning big and join a lottery syndicate. We made it simple to create and manage lottery syndicates online, offering a combination of ticket types.</Text>
        </View>



        <View style={styles.box5}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/port5.png')}
          />

          <Text style={styles.title3}>Lumiere32- B2B Supplier Marketplace</Text>
          <Text style={styles.subTitle}>Technologies: Angular, MYSQL, NestJs</Text>
          <Text style={styles.detail}>e-Commerce (Healthcare) E-commerce Website or marketplace for dental/medical products, connecting manufacturers, dealers and dental/medical professionals.
          </Text>
        </View>




        <View style={styles.box5}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/port6.jfif')}
          />

          <Text style={styles.title3}>Parsl</Text>
          <Text style={styles.subTitle}>Technologies: Angular, Node.js</Text>
          <Text style={styles.detail}>Parsl is a platform that combines blockchain, NFC and IoT to create a track and trace technology that not only automates compliance efficiently and accurately but offers a range of tangible business benefits for every stage of the cannabis supply chain.</Text>
        </View>


        <View style={styles.box5}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/port7.png')}
          />

          <Text style={styles.title3}>VirusGeeks</Text>
          <Text style={styles.subTitle}>Technologies: React, NextJs, NestJs</Text>
          <Text style={styles.detail}> Healthcare Platform VirusGeeks, a BioHealth Technology platform, which provide health tech solutions such as end-to-end Covid-19 testing.</Text>
        </View>




















      </View>



















    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',


  },
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
    width: '100%',
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
  subTitle: {

  },
  title3: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '600',
    padding: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '500',
    padding: 10,
  },
  detail: {
    fontSize: 16,
    padding: 10,
  },
  Image: {
    height: 200,
    width: 300
  },
  box5: {
    borderWidth: 1,
    backgroundColor: '#ffff',
    borderColor: '#D0D3D4',
    margin: 10,
    display: 'flex',
    padding: 5
  },

})