import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';

import OnboardingSlide from './OnboardingScreenContent';

const slides = [
  {
    title: 'ROUNDS',
    image: require('../assets/images/kickBoxingRound.jpg'),
    description:
      'Shadow boxing, bag & pad work - freestyle or using our virtual combo coach',
      backgroundColor: '#3d8f29'
  },
  {
    title: 'INTERVALS',
    image: require('../assets/images/Interval.png'),
    description:
      'Create custom intervals and structure your workout exactly how you want',
      backgroundColor: '#ad60d7'
  },
  {
    title: 'STOPWATCH',
    image: require('../assets/images/Stopwatch.png'),
    description:
      'Track your training time and stay focused throughout your workout',
      backgroundColor: '#f28f0d'
  },
];

function OnboardingScreen({ navigation }: any) {
  return (
    <View style={styles.container}>

      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}

        keyExtractor={(item) => item.title}

        renderItem={({ item }) => (
          <OnboardingSlide
            item={item}
            navigation={navigation}
          />
        )}
      />

    </View>
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});