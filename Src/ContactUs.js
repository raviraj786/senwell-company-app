import {Image ,View, Text ,TextInput ,StyleSheet, TouchableOpacity ,SafeAreaView ,ScrollView, Alert} from 'react-native'
import React ,{useState}from 'react'
import { Formik } from "formik";
import * as yup from 'yup'
import MapScreen from '../components/MapScreen';

export default function Contact({navigation}) {
   
    

  return (
    <View style={{flex:1,backgroundColor:'#ffff'}}>
    <ScrollView>
<SafeAreaView>
  



<View>
<MapScreen/>
</View>





<Image
        style={styles.tinyLogo}
        source={require('../assets/contect2.png')}
      />





<Formik 
initialValues = {{ 
  name: '',
  email: '', 
  details:''
}}

onSubmit={values => Alert.alert(JSON.stringify(values))}
validationSchema={yup.object().shape({
 name: yup
 .string()
 .required('Please, provide your name!'),
email: yup
 .string()
 .email()
 .required(),
details: yup
 .string()
 .required(),
})}

>


{({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
  <View style={{flex:2,backgroundColor:'#fff' ,marginHorizontal:20,}}>
<TextInput
 value={values.name}
   style={styles.input}
   placeholderTextColor={'#273746'}
   onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder=" Enter Name "
   />
  {touched.name && errors.name &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
  }
   <TextInput
   value={values.email}
   style={styles.input}
   placeholderTextColor={'#273746'}
   onChangeText={handleChange('email')}
   onBlur={() => setFieldTouched('email')}
   placeholder="E-mail"
   />
 {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
            }

  <TextInput
      value={values.details}
   style={styles.inputBox}
   placeholderTextColor={'#273746'}
   placeholder='Enter your details...'
   onChangeText={handleChange('details')}
   onBlur={() => setFieldTouched('details')}
   />
 {touched.details && errors.details &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.details}</Text>
            }



<TouchableOpacity style={styles.btn}
onPress={handleSubmit}
disabled={!isValid}
>
<Text style={styles.btntext}>SEND MESSAGE</Text>
</TouchableOpacity>
</View>

)}

</Formik>



</SafeAreaView>    
</ScrollView>
     
</View>
  )
}



const styles = StyleSheet.create({
    input:{
        padding:10,
        borderWidth:1,
        borderColor:'#273746',
        marginHorizontal:20,
        marginVertical:15,
        borderRadius:5
    
    },
    inputBox:{
        padding:10,
        borderWidth:1,
        borderColor:'#273746',
        marginHorizontal:20,
        marginVertical:15,
        height:70,
        borderRadius:5
    
    },
    btn:{
        backgroundColor:'#0D47A1',
        padding:10,
        marginHorizontal:20,
        marginVertical:15,
        borderRadius:5
    },
    error: {
        color: 'red',
        alignSelf: 'center'
    },
    tinyLogo: {
      width: 300,
      height: 150,
      alignSelf:'center',
      marginLeft:20,
      marginTop:20
    },
    btntext:{color:'#FFFF',justifyContent:'center',alignSelf:'center',fontWeight:'500'}
})