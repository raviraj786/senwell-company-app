import { View, Text  ,StyleSheet ,Image} from 'react-native'
import React from 'react'

export default function Meet() {
  return (
    <View style={styles.cantainer}>
<Text style={{fontSize:20,fontWeight:'bold', padding:10,marginLeft:10}}>Let's Join Us In This Adventure</Text>
<View style={styles.box5}>
<Text style={{fontSize:'18'}}>Senwell Solutions is one of the best places to start your career and develop your skills. We welcome fresh graduates, people who are passionate even if they do not have any work experience.
</Text>
</View>



<View style={styles.box5}>
<Image
style={styles.ImageTool}
source={require('../../assets/meet1.png')}
/>

</View>






<View style={styles.box5}>
<Text style={styles.textitle}>People-first culture</Text>
<Text>We care about our employees and commit ourselves to providing transparent communication and real feedback opportunities.</Text>
</View>

<View style={styles.box5}>
<Image
style={styles.ImageTool}
source={require('../../assets/meet2.png')}
/>
</View>





<View style={styles.box5}>
<Text style={{color:'black',fontWeight:'bold'}}>Challenging & Innovative Projects</Text>
<Text>We make sure that every new project presents you with an opportunity to develop your skills and get value out of experiences.</Text>

</View>



<View style={styles.box5}>
<Image
style={styles.ImageTool}
source={require('../../assets/meet3.jpg')}
/>
</View>



<View style={styles.box5}>
<Text  style={styles.textitle}>Life At Senwell Solutions</Text>
<Text>The development of a company is directly proportional to the growth of its people. Senwell Solutions creates an environment of open doors and self-improvement for each individual of its family. So life here is a mix of work and fun.</Text>
</View>




<View style={styles.box5}>
<Image
style={styles.ImageTool}
source={require('../../assets/meet4.png')}
/>

</View>


<View style={styles.box5}>
<Text  style={styles.textitle}>Latest Technology</Text>
<Text>As well as using the latest technology, we guarantee our developers have all the tools they require</Text>

</View>


<View style={styles.box5}>
<Text  style={styles.textitle}>Core Purpose & Values</Text>
<Text>We’ve made Humanity’s natural craving to Rise as our driving purpose. We challenge customary reasoning & imaginatively utilize every one of our assets to drive positive change in the existences of our networks and partners across the world, to empower them to Rise.</Text>
</View>





    </View>
  )
}

const styles =StyleSheet.create({
  cantainer:{
    flex:1,
    backgroundColor:'#ffff'
  },
  box5: {
    borderWidth: 1,
    backgroundColor: '#ffff',
    borderColor: '#D0D3D4',
    margin: 20,
    display: 'flex',
    padding: 10
  },
 
  ImageTool:{
    height:250,
    width:'100%'
  },
  textitle:{
color:'black',
fontWeight:'bold'
  }
})