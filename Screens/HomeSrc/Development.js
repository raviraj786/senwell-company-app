import { View, Text  ,ImageBackground ,StyleSheet ,Image ,ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const Development = () => {
    const navigation = useNavigation();
  return (
    <ScrollView>
    <View>
     
      <ImageBackground 
        style={styles.Image}
        source={require('../../assets/homeimg2.jpg')}>
            <Text style={styles.Title}>Custom Software Development Services</Text>

      </ImageBackground>

      <Text style={styles.Title2}>Custom Software Development Services</Text>
<Text style={styles.Title3}>Over the years of delivering robust solutions from simple web applications to complex business management systems, our software development experts have built strong expertise in reliable architecture and efficient development practices.</Text>


<View style={{flexDirection:'row' ,alignSelf:'center' ,}}>

<TouchableOpacity  onPress={() => {
        navigation.navigate("Web Development Services");
      }}>
<View style={styles.box5} >
    
<Image
style={styles.ImageTool}
source={require('../../assets/web.png')}
/>
    </View>
    <Text style={styles.Title5}>Web application</Text>
    <Text style={styles.Title6}>development</Text>
</TouchableOpacity>


<TouchableOpacity onPress={() => {
        navigation.navigate("IT Consulting Services");
      }}>
<View style={styles.box5} >
<Image
style={styles.ImageTool}
source={require('../../assets/consulting.png')}
/>

</View>
<Text style={styles.Title5}>consulting</Text>
</TouchableOpacity>
</View>




<View style={{flexDirection:'row' ,alignSelf:'center'}}>
    <TouchableOpacity onPress={() => {
        navigation.navigate("Moile App Development");
      }}>
<View style={styles.box5} >
<Image
style={styles.ImageTool}
source={require('../../assets/mob.png')}
/>

</View>
<Text style={styles.Title5}>Moile App</Text>
<Text style={styles.Title6}>Development</Text>

</TouchableOpacity>





<TouchableOpacity onPress={()=> {navigation.navigate("DevOps Services")}}>
<View style={styles.box5}>
<Image
style={styles.ImageTool}
source={require('../../assets/devops.png')}
/>

</View>
<Text style={styles.Title5}>DevOps</Text>
</TouchableOpacity>
</View>



<View>
<Text style={styles.Title2}>Our Technology Expertise</Text>
<Text style={styles.Title3}>When outsourcing software development to Senwell, be certain that you’ll work with only proven technologies, development practices. Our engineers combine niche expertise in a broad range of programming languages and tools with broad domain knowledge to help pick the right tech stack for your business needs.</Text>

<View style={{flexDirection:'row',alignSelf:'center'}}>
<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/js1.png')}
/>
</View>


<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/t4.png')}
/>

</View>


<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/t2.png')}
/>
</View>

</View>






<View style={{flexDirection:'row',alignSelf:'center', display:'flex' }}>
<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/t6.png')}
/>

</View>

<View style={styles.box2}>
<Image
style={styles.ImageTool}
source={require('../../assets/m4.png')}
/>

</View>
</View>
</View>


</View>
    </ScrollView>
  )
}


    const styles = StyleSheet.create({
        Image:{
            width:'100%',
            height:200,
            alignItems:'center',
           resizeMode:'contain'
        
        },
        Title:{
            alignSelf:'center',
            paddingTop:60,
            fontWeight:'bold',
            fontSize:30,
            color:'#ffff'
             
        
        
        },
        Title2:{
            textAlign:'center',
            fontSize:20,
            padding:10,
            fontWeight:'bold'
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
            height:70,
            width:100,
            margin:20
        },
        Title5:{
            color:'black',
            textAlign:'center',
            padding:10,
            fontSize:15,
            fontWeight:'500'
        },
        ImageTool:{
            height:80,
            width:80
        },
        box2:{
            display:'flex',
            borderWidth:'1',
            backgroundColor:'#ffff',
            borderColor:'black',
            height:80,
            width:90,
            margin:10
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
            margin:5,
            display: 'flex',
            padding: 5,
            height:100,
            width:150
          },
          Title6:{
            color:'black',
            textAlign:'center',
        
            fontSize:15,
            fontWeight:'500'
          }
        
})

export default Development