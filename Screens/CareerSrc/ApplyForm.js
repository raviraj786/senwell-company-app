
import ResumeFile from './ResumeFile';
import React, { Component } from 'react';
import { TextInput, Text, Button, Alert, View, StyleSheet } from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'

export default class ApplyForm extends Component {
  render() {
    const inputStyle = {
      borderWidth: 1,
      borderColor: '#4e4e4e',
      padding: 12,
      marginBottom: 5,
    };
    return (
      <Formik
        initialValues={{ 
          name: '',
          email: '', 
          number: '' 
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
          number: yup
            .string()
            .max(10)
            .required(),
        })}
       >

        
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.name}
              style={inputStyle}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Name"
            />
            {touched.name && errors.name &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
            }            
            <TextInput
              value={values.email}
              style={inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
            }
            <TextInput
              value={values.number}
              style={inputStyle}
              onChangeText={handleChange('number')}
              placeholder="number"
              onBlur={() => setFieldTouched('number')}
              secureTextEntry={true}
            />
            {touched.number && errors.number &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.number}</Text>
            }

<View>
<ResumeFile 
/> 
</View>


            <Button
              color="#3740FE"
              title='Submit'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    );
  }
}
const styles = StyleSheet.create({
  formContainer: {
    padding: 50 
  }
});
console.disableYellowBox = true;