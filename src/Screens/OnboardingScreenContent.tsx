import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { horizontalScale, verticalScale, moderateScale } from '../utils/index';

import ScreenWrapper from '../components/wrapper/Wrapper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

function OnboardingScreenContent({ item, navigation }: any) {
  const insets = useSafeAreaInsets();
  return (
    <ScreenWrapper style={styles.wrapper}>
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={[styles.container, { paddingTop: insets.top }]}
      >
        <View style={[styles.upperView, styles.contentPadding]}>
          <Pressable
            style={[
              styles.titleButton,
              {
                backgroundColor: item.backgroundColor,
              },
            ]}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>

          <Text style={styles.logoName}>
            Combat<Text style={styles.boldText}>GO</Text>
          </Text>
        </View>

        <View
          style={[
            styles.loginView,
            styles.contentPadding,
            {
              paddingBottom: insets.bottom,
            },
          ]}
        >
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{item.description}</Text>
          </View>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Continue with Google</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('SignupScreen')}
          >
            <Text style={styles.buttonText}>Sign up with Email</Text>
          </Pressable>

          <Text style={styles.memberText}>Already a member?</Text>

          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate('LoginFormScreen')}
          >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
}

export default OnboardingScreenContent;

const styles = StyleSheet.create({
  wrapper: {
    width: SCREEN_WIDTH,
    backgroundColor: 'transparent',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  upperView: {
    flex: 0.45,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    paddingBottom: verticalScale(20),
  },

  titleButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: horizontalScale(10),
    borderRadius: moderateScale(20),
    marginTop: verticalScale(40),
  },
  contentPadding: {
    paddingHorizontal: horizontalScale(30),
  },
  title: {
    color: 'white',
    fontSize: moderateScale(15),
    fontFamily: 'Montserrat-Bold',
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
    paddingTop: moderateScale(15),

    flex: 0.55,

    backgroundColor: 'white',

    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),

    alignItems: 'center',
    justifyContent: 'center',
  },

  descriptionContainer: {
    paddingBottom: moderateScale(15),
  },

  description: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },

  button: {
    borderWidth: moderateScale(1),
    borderColor: '#b0b2b2',

    paddingVertical: verticalScale(12),

    borderRadius: moderateScale(22),

    marginVertical: moderateScale(8),

    width: '100%',

    alignItems: 'center',
  },

  buttonText: {
    color: 'black',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
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
    width: '100%',

    alignItems: 'center',
  },

  loginText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },
});
