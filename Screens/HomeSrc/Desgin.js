import { View, Text  ,ImageBackground ,StyleSheet ,Image ,FlatList} from 'react-native'
import React from 'react'

export default function Desgin() {
    const data = [
        {Title:"UI/UX Audit" ,
         details:'we have in depth user analysis, expertise, review and excellent evaluation, we can suggest you’re the best product change and impactful changes to raise your website at top notch.'  },
        {Title:"Brand/Logo Design" ,
         details:'We help you initiate dialogue with your customers and ensure that the image and perception of your product is deeply embedded in their minds and minds with a unique identity and clear message.'  },
        {Title:"Research Prototypes" ,
         details:'We start by conducting comprehensive user research to understand your clients demands, and then we create a great visual representation of your idea, ranging from a simple sketch to a full-fledged prototype.'  },
        {Title:"UX/UI Design" ,
         details:'It combines scrutiny and design best practices and tools to provide the product with the interaction experience, visual appeal, and emotional connection that customers really want.'  },
        {Title:"Product Design" ,
         details:'Well look at your companys objectives, the market, and your target audience to help you create an enticing value proposition backed by engaging visual aesthetics and a data-driven user experience.'  },
        {Title:"App Design" ,
         details:'We mix user-centered design approaches with significant customer behaviour research to provide your web or mobile application a visually appealing implementation and memorable experiences.'  },
    ]


  return (
    <View>
      <ImageBackground 
        style={styles.Image}
        source={require('../../assets/logo01.png')}>
            <Text style={styles.Title}>UI/UX Design</Text>

      </ImageBackground>


<Text style={styles.Title2}>We Can Help You</Text>
<Text style={styles.Title3}>Outstanding UI/UX design services fueled by a shared passion, refined skill, and years of experience.</Text>






<Text style={styles.Title2}>UI/UX Design Tools We Use</Text>

<View style={{flexDirection:'row',alignSelf:'center'}}>


<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/tool1.webp')}
/>

</View>


<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/tool2.png')}
/>
<Text style={styles.texttool}>Photoshop</Text>
</View>


<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/tool3.png')}
/>
<Text style={styles.texttool}>Sketch</Text>
</View>

<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/too4.png')}
/>
<Text style={styles.texttool}>Indesign</Text>
</View>



</View>


<Text style={styles.Title2}>Expert UI/UX Design</Text>



<FlatList
data={data} 
renderItem = {({item,index}) => {
    return(
        <View style={styles.box5}>
            <Text style={styles.Title3}>{item.Title}</Text> 
            <Text>{item.details}</Text>
            
        </View>
    )
}}
/>









    </View>
  )
}

const styles = StyleSheet.create({
Image:{
    width:'100%',
    height:200

},
Title:{
    alignSelf:'center',
    paddingTop:60,
    fontWeight:'bold',
    fontSize:40,
     


},
Title2:{
    textAlign:'center',
    fontSize:20,
    padding:10,
    fontWeight:'bold',
    marginTop:30

},
Title3:{
    textAlign:'center',
    padding:10,
    fontWeight:'600'
},
Title4:{
    padding:20,
    fontWeight:'bold',
    alignSelf:'flex-start',
    padding:10,
    fontSize:'20'

},
box:{
    display:'flex',
    borderWidth:'1',
    backgroundColor:'#1F45FC',
    borderColor:'#ffff',
    height:60,
    width:95,
    margin:10
},
Title5:{
    color:'#ffff',
    textAlign:'center',
    padding:3,
    fontSize:15,
    fontWeight:'600'
},
ImageTool:{
    height:60,
    width:60,
    alignSelf:'center'
},
box2:{
    display:'flex',
    borderWidth:'1',
    backgroundColor:'#ffff',
    borderColor:'black',
    height:60,
    width:80,
    margin:5
},
texttool:{
    textAlign:'center',
    padding:2,
    fontSize:'18',
    fontWeight:'600'
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