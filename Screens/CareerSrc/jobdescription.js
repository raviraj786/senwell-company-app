import { View, Text ,StyleSheet , TouchableOpacity  ,ScrollView} from 'react-native'
import React from 'react'

export default function jobdescription({navigation}) {
  return (
    <View style={styles.cantainer}>



<Text style={styles.title}>Node.js Developer</Text> 

<TouchableOpacity style={{display:'flex',padding:10 ,backgroundColor:'blue' ,margin:20}}
onPress={() => navigation.navigate('Apply for a job')}
>
    <Text style={{textAlign:'center' ,fontSize:17 ,color:'#ffff'}}>Apply now</Text>
</TouchableOpacity>
 


   <ScrollView>

   <View style={styles.box}>
<Text style={{alignContent:'flex-start',padding:10}}>
We are looking for an ASP.NET developer to be responsible for designing and monitoring applications. The responsibilities of ASP.NET developers include writing code, designing solutions for applications, and improving functionality. To be successful as an ASP.NET developer, you should demonstrate excellent problem-solving skills, high-quality coding skills, and the ability to manage your time efficiently. Ultimately, a top-notch ASP.NET developer should have superior knowledge of software development, a keen eye for detail, and be able to work independently. We are looking for an experienced and passionate Software Tester to join our team!. As a Software Tester at our company, you will have the opportunity to work on new and exciting projects and develop your career. We build strong client relationships and we work only with overseas client. Our client base is USA, UK, SPAIN, and DUBAI & CANADA.
</Text>
</View>



<Text style={styles.title3}>Requirements</Text>
   <View style={styles.box2}>
<Text style={{textAlign:'auto' ,padding:10}}>
Bachelor's degree in computer science, information science, or similar.
At least two years' experience as a Node.js developer.
Extensive knowledge of JavaScript, web stacks, libraries, and frameworks.
Knowledge of front-end technologies such as HTML5 and CSS3.
Superb interpersonal, communication, and collaboration skills.
Exceptional analytical and problem-solving aptitude.
Great organizational and time management skills.
Availability to resolve urgent web application issues outside of business hours.
</Text>
   </View>


   <Text style={styles.title3}>Responsibilities</Text>

<View style={styles.box2}>
<Text style={{textAlign:'auto' ,padding:10}}>
Developing and maintaining all server-side network components.
Ensuring optimal performance of the central database and responsiveness to front-end requests.
Collaborating with front-end developers on the integration of elements.
Designing customer-facing UI and back-end services for various business processes.
Developing high-performance applications by writing testable, reusable, and efficient code.
Implementing effective security protocols, data protection measures, and storage solutions.
Running diagnostic tests, repairing defects, and providing technical support.
Documenting Node.js processes, including database schemas, as well as preparing reports.
Recommending and implementing improvements to processes and technologies.
Keeping informed of advancements in the field of Node.js development.
</Text>
</View>

 </ScrollView> 

    </View>
  )
}

const styles = StyleSheet.create({
    cantainer:{
        flex:1,
        alignContent:'flex-start',
        backgroundColor:'#ffff'

    },
    title:{
        
        fontSize:15,
        textAlign:'center',
        fontWeight:'700',
        paddingTop:10
    },
    box:{
        borderWidth:1,backgroundColor:'#ffff',borderColor:'#D0D3D4' ,margin:20, display:'flex',
    },
    box2:{
        borderWidth:1,backgroundColor:'#ffff',borderColor:'#D0D3D4' ,margin:20, display:'flex'
    },
    title3:{
         color:'black',
        fontSize:15,
        fontWeight:'bold',
        marginLeft:10
    }
})