import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import StackHeader from '../components/stackHeader/stackHeader';
import { horizontalScale, verticalScale, moderateScale } from '../utils/index';

function ForgetPasswordScreen({ navigation }: any) {
  
  return (
    <View style={styles.passwordReset}>
        <StackHeader
        title="Reset Password"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.grayText}>Enter the email you used when you signed up and we will send you a password reset link.</Text>
      <TextInput
        style={styles.inputfiled}
        placeholder="Enter Email Address"
        placeholderTextColor="gray"
        secureTextEntry={true}
      ></TextInput>
      <Pressable style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </Pressable>
      
    </View>
  );
}

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  passwordReset: {
    flex: 1,
    flexDirection: 'column',
    gap: moderateScale(20),
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputfiled: {
    borderWidth: 1,
    borderColor: '#cfd1d1',
    padding: moderateScale(15),
    borderRadius: moderateScale(22),
    width: '90%',
    alignItems: 'center',
    color: 'black',
  },
  submitButton: {
    backgroundColor: '#2583b2',
    borderWidth: moderateScale(2),
    borderColor: '#2583b2',
    padding: moderateScale(12),
    borderRadius: moderateScale(22),
    width: '90%',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: moderateScale(16),
    color: 'white',
  },
  grayText: {
    marginVertical: verticalScale(20),
    fontSize: moderateScale(16),
    color: 'gray',
    textAlign: 'center',
    width: '90%',
    paddingHorizontal: horizontalScale(30),
  },
});
