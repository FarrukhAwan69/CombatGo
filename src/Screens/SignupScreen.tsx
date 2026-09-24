import React from 'react';
import { Formik } from 'formik';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import StackHeader from '../components/stackHeader/stackHeader';
import { signupValidationSchema } from '../validations/SignupValidation';
import { horizontalScale, verticalScale, moderateScale } from '../utils/index';

function SignupScreen({ navigation }: any) {
  console.log('SIGNUP SCREEN LOADED');
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={signupValidationSchema}
      onSubmit={values => {
        console.log('FORM VALUES:', values);

        navigation.navigate('UserInfoScreen', {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
        });
      }}
    >
      {({
        values,
        handleBlur,
        touched,
        errors,
        handleChange,
        handleSubmit,
      }) => (
        <View style={styles.signup}>
          <StackHeader
            title="Sign Up"
            onPress={() => {
              console.log('SIGNUP HEADER PRESSED');
              navigation.goBack();
            }}
          />

          <TextInput style={styles.inputfiled} placeholder="First Name" placeholderTextColor="gray" value={values.firstName} onChangeText={handleChange('firstName')} onBlur={handleBlur('firstName')} />
          {touched.firstName && errors.firstName && (<Text style={styles.errorText}>{errors.firstName}</Text>)}

          <TextInput style={styles.inputfiled} placeholder="Last Name" placeholderTextColor="gray" value={values.lastName} onChangeText={handleChange('lastName')} onBlur={handleBlur('lastName')} />
          {touched.lastName && errors.lastName && (<Text style={styles.errorText}>{errors.lastName}</Text>)}

          <TextInput style={styles.inputfiled} placeholder="Email Address" placeholderTextColor="gray" value={values.email} onChangeText={handleChange('email')} onBlur={handleBlur('email')} />
          {touched.email && errors.email && ( <Text style={styles.errorText}>{errors.email}</Text> )}
          
          <TextInput style={styles.inputfiled} placeholder="Password" placeholderTextColor="gray" secureTextEntry value={values.password} onChangeText={handleChange('password')} onBlur={handleBlur('password')} />
          {touched.password && errors.password && ( <Text style={styles.errorText}>{errors.password}</Text>)}

          <Text style={styles.AlreadyaMemberText}>
            By signing up, you agree to our{' '}
            <Text style={styles.link}>terms of services</Text> and{' '}
            <Text style={styles.link}>privacy and conditions</Text>
          </Text>

          <Pressable style={styles.Signupbutton} onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>Agree and Sign up</Text>
          </Pressable>

          <Text style={styles.AlreadyaMemberText}>
            Already have an Account?{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('LoginFormScreen')}
            >
              Login
            </Text>
          </Text>
        </View>
      )}
    </Formik>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    flexDirection: 'column',
    gap: moderateScale(15),
    alignItems: 'center',
    backgroundColor: 'white',
  },
  firstInputfield: {
    marginTop: verticalScale(20),
  },
  inputfiled: {
    borderWidth: moderateScale(1),
    borderColor: '#cfd1d1',
    padding: moderateScale(13),
    borderRadius: moderateScale(22),
    width: '90%',
    alignItems: 'center',
    color: 'black',
  },
  Signupbutton: {
    backgroundColor: '#2583b2',
    borderWidth: moderateScale(2),
    borderColor: '#2583b2',
    padding: moderateScale(13),
    borderRadius: moderateScale(22),
    width: '90%',
    alignItems: 'center',
    cursor: 'pointer',
  },
  AlreadyaMemberText: {
    marginVertical: verticalScale(10),
    fontSize: moderateScale(16),
    color: 'gray',
    marginHorizontal: horizontalScale(20),
    textAlign: 'center',
  },
  link: {
    color: '#2583b2',
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: 'white',
  },
  errorText: {
    color: 'red',
    fontSize: moderateScale(12),
    width: '90%',
    marginTop: verticalScale(-10),
  },
});
