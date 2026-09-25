import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import FeedStack from '../stacks/feedStack/FeedStack';
import WorkoutStack from '../stacks/workoutStack/WorkoutStack';
import GoStack from '../stacks/goStack/GoStack';
import HistoryStack from '../stacks/historyStack/HistoryStack';
import MoreStack from '../stacks/moreStack/MoreStack';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const currentRoute =
          getFocusedRouteNameFromRoute(route) ?? 'MainScreenGo';

        return {
          headerShown: false,

          tabBarActiveTintColor: '#287BA8',
          tabBarInactiveTintColor: '#888888',

          tabBarIcon: ({ color }) => {
            let image;

            switch (route.name) {
              case 'Feed':
                image = require('../../assets/icons/icon-feed.png');
                break;

              case 'Workout':
                image = require('../../assets/icons/icon-workouts.png');
                break;

              case 'GO':
                image = require('../../assets/icons/icon-stopwatch.png');
                break;

              case 'History':
                image = require('../../assets/icons/icon-history.png');
                break;

              case 'More':
                image = require('../../assets/images/profile.png');
                break;
            }

            return (
              <Image
                source={image}
                style={[
                  styles.icon,
                  {
                    tintColor: color,
                  },
                ]}
              />
            );
          },

          tabBarStyle:
            route.name === 'GO' && currentRoute !== 'MainScreenGo'
              ? { display: 'none' }
              : insets.bottom > 0
                ? {
                    paddingBottom: insets.bottom,
                  }
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

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
  },
});

export default BottomTabs;