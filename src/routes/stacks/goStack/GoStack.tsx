import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreenGo from "../../../Screens/MainScreenGo";
import StopWatchScreen from "../../../Screens/StopWatchScreen";
import TotalTimeScreen from "../../../Screens/TotalTimeScreen";
function GoStack() {
    const Stack = createNativeStackNavigator();
     console.log('🔥 THIS IS MY GOSTACK');
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MainScreenGo"
        component={MainScreenGo}
      />

      <Stack.Screen
        name="StopWatchScreen"
        component={StopWatchScreen}
      />

      <Stack.Screen
        name="TotalTimeScreen"
        component={TotalTimeScreen}
      />{/* 

      <Stack.Screen
        name="StopwatchResult"
        component={StopwatchResult}
      /> */}
    </Stack.Navigator>
  );
}

export default GoStack;