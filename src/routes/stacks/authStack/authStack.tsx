
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreenContent from '../../../Screens/OnboardingScreenContent';
import OnboardingScreen from '../../../Screens/OnboardingScreen';
import SplashScreen from '../../../Screens/SplashScreen';
import SignupScreen from '../../../Screens/SignupScreen';
import UserInfoScreen from '../../../Screens/UserInfoScreen';
import LoginFormScreen from '../../../Screens/LoginFormScreen';
import ForgetPasswordScreen from '../../../Screens/ForgetPasswordScreen';

function AuthStack() {
const Stack = createNativeStackNavigator();
  return (
    
    
      <Stack.Navigator
 screenOptions={{headerShown: false,}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}  />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
        <Stack.Screen name="LoginFormScreen" component={LoginFormScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgetPasswordScreen} />
        <Stack.Screen name="Screen3" component={OnboardingScreenContent} />   
      </Stack.Navigator>
    
  );
}



export default AuthStack;
