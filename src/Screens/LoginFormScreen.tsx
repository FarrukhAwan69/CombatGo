import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import Checkbox from '../components/checkbox/checkbox';
import StackHeader from '../components/stackHeader/stackHeader';
import { horizontalScale, verticalScale, moderateScale } from '../utils/index';

function LoginFormScreen({ navigation }: any) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.login}>
      <StackHeader
        title="Login"
        onPress={() => {
          console.log('LOGIN HEADER PRESSED');
          navigation.goBack();
        }}
      />
      <View style={[styles.content, styles.contentPadding]}>
        <Pressable style={styles.facebookbutton}>
          <Text style={styles.facebookbuttonText}>Continue with Facebook</Text>
        </Pressable>

        <Pressable style={styles.googlebutton}>
          <Text style={styles.googlebuttonText}>Continue with Google</Text>
        </Pressable>

        <Text style={styles.orText}>or login with Email</Text>

        <TextInput
          style={styles.inputfiled}
          placeholder="Email Address"
          placeholderTextColor="gray"
        ></TextInput>
        <TextInput
          style={styles.inputfiled}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
        ></TextInput>
        <View style={styles.rememberMeContainer}>
          <View style={styles.checkboxContainer}>
            <Checkbox checked={checked} onPress={() => setChecked(!checked)} />
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          >
            Forgot Password?
          </Text>
        </View>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </Pressable>
        <Text style={styles.noAccountText}>
          Don't have an account{' '}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('SignupScreen')}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default LoginFormScreen;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    flexDirection: 'column',
    gap: moderateScale(25),
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    gap: moderateScale(15),
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentPadding: {
    paddingHorizontal: horizontalScale(30),
  },
  facebookbutton: {
    backgroundColor: '#3b5998',
    borderWidth: moderateScale(2),
    borderColor: '#3b5998',
    padding: moderateScale(12),
    borderRadius: moderateScale(22),
    width: '100%',
    alignItems: 'center',
    color: 'white',
  },
  googlebutton: {
    backgroundColor: 'white',
    borderWidth: moderateScale(2),
    borderColor: '#b0b2b2',
    padding: moderateScale(12),
    borderRadius: moderateScale(22),
    width: '100%',
    alignItems: 'center',
    color: 'white',
  },
  facebookbuttonText: {
    fontFamily: 'Montserrat-Primary',
    fontSize: moderateScale(16),
    color: 'white',
  },
  googlebuttonText: {
    fontFamily: 'Montserrat-Primary',
    fontSize: moderateScale(16),
    color: 'black',
  },
  inputfiled: {
    borderWidth: moderateScale(1),
    borderColor: '#cfd1d1',
    padding: moderateScale(15),
    borderRadius: moderateScale(22),
    width: '100%',
    alignItems: 'center',
    color: 'black',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: horizontalScale(10),
  },
  checkboxContainer: {
    flexDirection: 'row',
    gap: moderateScale(10),
  },
  rememberMeText: {
    fontFamily: 'Montserrat-Primary',
    fontSize: moderateScale(16),
    color: 'gray',
  },
  loginButton: {
    backgroundColor: '#2583b2',
    borderWidth: moderateScale(2),
    borderColor: '#2583b2',
    padding: moderateScale(12),
    borderRadius: moderateScale(22),
    width: '100%',
    alignItems: 'center',
    color: 'white',
  },
  orText: {
    fontFamily: 'Montserrat-Primary',
    fontSize: moderateScale(16),
    color: 'gray',
  },
  noAccountText: {
    fontFamily: 'Montserrat-Primary',
    fontSize: moderateScale(16),
    color: 'gray',
  },
  link: {
    color: '#2583b2',
    fontFamily: 'Montserrat-Primary',
    fontSize: moderateScale(16),
  },
  loginButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    color: 'white',
  },
});
