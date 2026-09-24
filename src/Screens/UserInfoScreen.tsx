import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducers/userReducer';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import StackHeader from '../components/stackHeader/stackHeader';
import { horizontalScale, verticalScale, moderateScale } from '../utils/index';

function UserInfoScreen({ route,navigation }: any) {
  const dispatch = useDispatch();
   const { firstName, lastName, email } = route.params;
  return (
    <View style={styles.welcome}>

      <StackHeader
        title="Sign Up"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.content}>

        <Image
          style={styles.profileImage}
          source={require('../assets/images/profile.png')}
        />

        <Text style={styles.welcomeText}>
          Welcome {firstName} 
        </Text>

        <Text style={styles.emailText}>
          You are signing up with{' '}
          <Text style={styles.blueText}>
            {email}
          </Text>{' '}
          We will send a confirmation email to this address to{' '}
          <Text style={styles.blueText}>
            confirm your account.
          </Text>
        </Text>

        <Pressable
          style={styles.continueSignupButton}
         
  onPress={() => {
    dispatch(
      setUser({
        firstName,
        lastName,
        email,
      })
    );
  }}
>
  <Text style={styles.buttonText}>Continue</Text>
</Pressable>
      </View>
    </View>
  );
}

export default UserInfoScreen;

const styles = StyleSheet.create({

  welcome: {
    flex: 1,
    backgroundColor: 'white',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    gap: moderateScale(20),
  },

  profileImage: {
    width: moderateScale(170),
    height: moderateScale(170),
    borderRadius: moderateScale(85),
    marginVertical: verticalScale(30),
  },

  continueSignupButton: {
    backgroundColor: '#2583b2',
    borderWidth: moderateScale(2),
    borderColor: '#2583b2',
    padding: moderateScale(15),
    borderRadius: moderateScale(22),
    marginVertical: verticalScale(5),
    width: '100%',
    alignItems: 'center',
  },

  blueText: {
    color: '#2583b2',
  },

  welcomeText: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },

  emailText: {
    marginVertical: verticalScale(10),
    fontSize: moderateScale(20),
    color: 'gray',
    textAlign: 'center',
  },

  buttonText: {
    fontSize: moderateScale(20),
    color: 'white',
  },
});