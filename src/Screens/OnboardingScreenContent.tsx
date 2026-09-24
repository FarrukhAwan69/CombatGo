import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { horizontalScale, verticalScale, moderateScale } from '../utils/index';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

function OnboardingScreenContent({ item, navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={[styles.upperView, { paddingTop: insets.top }]}>
        <Pressable style={[styles.titleButton, { backgroundColor: item.backgroundColor }]}>
          <Text style={styles.title}>{item.title}</Text>
        </Pressable>
        <Text style={styles.logoName}>
          Combat<Text style={styles.boldText}>GO</Text>
        </Text>
      </View>

      <View style={[styles.loginView, { paddingBottom: insets.bottom }]}>
        <Text style={styles.description}>{item.description}</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.buttonText}>Sign up with Email</Text>
        </Pressable>

        <Text style={styles.memberText}>Already a member?</Text>

        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('LoginFormScreen')}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default OnboardingScreenContent;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  upperView: {
    flex: 0.45,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    paddingBottom: verticalScale(20),
  },
  titleButton: {
    backgroundColor: 'blue',
    alignSelf: 'flex-start',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: horizontalScale(10),
    borderRadius: moderateScale(20),
    marginTop: verticalScale(40),
    marginLeft: horizontalScale(10),
  },
  title: {
    color: 'white',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  logoName: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: moderateScale(35),
  },
  boldText: {
    fontWeight: 'bold',
  },
  loginView: {
    flex: 0.55,
    backgroundColor: 'white',
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: verticalScale(20),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    width: '90%',
  },
  button: {
    borderWidth: moderateScale(1),
    borderColor: '#b0b2b2',
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(22),
    marginVertical: verticalScale(8),
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  memberText: {
    marginVertical: verticalScale(20),
    fontSize: moderateScale(16),
    color: 'gray',
  },
  loginButton: {
    backgroundColor: '#2583b2',
    borderWidth: moderateScale(2),
    borderColor: '#2583b2',
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(22),
    marginVertical: verticalScale(5),
    width: '90%',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});