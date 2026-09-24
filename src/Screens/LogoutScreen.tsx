import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../store/reducers/userReducer';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import StackHeader from '../components/stackHeader/stackHeader';
import { horizontalScale, verticalScale, moderateScale } from '../utils/index';

function LogoutScreen({ navigation }: any) {
  const dispatch = useDispatch();
  return (
    <View style={styles.logout}>
      <StackHeader title="Logout" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Image
          style={styles.profileImage}
          source={require('../assets/images/profile.png')}
        />
        <Text style={styles.blueText}>Bye Bye</Text>
        <Text style={styles.logoutText}>
          Are you sure you want to logout from your account
        </Text>
        <Pressable
          style={styles.logoutbutton}
          onPress={() => {
            dispatch(clearUser());
          }}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default LogoutScreen;

const styles = StyleSheet.create({
  logout: {
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
    marginVertical: verticalScale(40),
  },
  logoutbutton: {
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
    fontWeight: 'bold',
    fontSize: moderateScale(30),
  },
  logoutText: {
    fontSize: moderateScale(20),
    marginBottom: verticalScale(10),
    color: 'gray',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: moderateScale(20),
    color: 'white',
  },
});
