import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogoutScreen from "../../../Screens/LogoutScreen";

function MoreStack() {
    const Stack = createNativeStackNavigator();
    
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Logout"
        component={LogoutScreen}
      />
    </Stack.Navigator>
  );
}

export default MoreStack;