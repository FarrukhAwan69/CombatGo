import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import StackHeader from '../components/stackHeader/stackHeader';
import { horizontalScale, verticalScale, moderateScale } from '../utils/index';
import Wrapper from '../components/wrapper/Wrapper';

function ForgetPasswordScreen({ navigation }: any) {
  return (
    <Wrapper>
    <View style={styles.passwordReset}>
      <StackHeader title="Reset Password" onPress={() => navigation.goBack()} />
      <View style={[styles.content, styles.contentPadding]}>
        <View style={styles.textContainer}>
          <Text style={styles.grayText}>
            Enter the email you used when you signed up and we will send you a
            password reset link.
          </Text>
        </View>

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
    </View>
    </Wrapper>
  );
}

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  passwordReset: {
    flex: 1,
    flexDirection: 'column',
    gap: moderateScale(25),
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    gap: moderateScale(15),
    backgroundColor: 'white',
  },
  contentPadding: {
    paddingHorizontal: horizontalScale(30),
  },
  inputfiled: {
    borderWidth: 1,
    borderColor: '#cfd1d1',
    padding: moderateScale(15),
    borderRadius: moderateScale(22),
    width: '100%',
    alignItems: 'center',
    color: 'black',
  },
  submitButton: {
    backgroundColor: '#2583b2',
    borderWidth: moderateScale(2),
    borderColor: '#2583b2',
    padding: moderateScale(12),
    borderRadius: moderateScale(22),
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: moderateScale(16),
    color: 'white',
  },
  textContainer: {
    paddingVertical: verticalScale(20),
  },
  grayText: {
    fontFamily: 'Montserrat-Primary',
    fontSize: moderateScale(16),
    color: 'gray',
    textAlign: 'center',
  },
});
