import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedStack from '../stacks/feedStack/FeedStack';
import WorkoutStack from '../stacks/workoutStack/WorkoutStack';
import GoStack from '../stacks/goStack/GoStack';
import HistoryStack from '../stacks/historyStack/HistoryStack';
import MoreStack from '../stacks/moreStack/MoreStack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
         screenOptions={({ route }) => {
        const currentRoute =
          getFocusedRouteNameFromRoute(route) ?? 'MainScreenGo';

        return {
          headerShown: false,

          tabBarStyle:
            route.name === 'GO' && currentRoute !== 'MainScreenGo'
              ? { display: 'none' }
              : undefined,
        };
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedStack}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutStack}
      /> 
      <Tab.Screen
        name="GO"
        component={GoStack}
      />
      <Tab.Screen
        name="History"
        component={HistoryStack}
      />
      <Tab.Screen
        name="More"
        component={MoreStack}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;