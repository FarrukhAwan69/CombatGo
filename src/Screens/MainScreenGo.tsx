import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import StackHeader from '../components/stackHeader/stackHeader';
import FeatureCard from '../components/featureCard/FeatureCard';
import { horizontalScale, verticalScale, moderateScale } from '../utils/index';

function MainScreenGo({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StackHeader title="CombatGo" onPress={() => {}} />
      <View style={[styles.features,styles.contentPadding]}>
        <FeatureCard
          title="ROUNDS"
          color="#91AF4C"
          lightColor="#F3F5EA"
          onPress={() => navigation.navigate('RoundsScreen')}
        />
        <FeatureCard
          title="INTERVALS"
          color="#9363AC"
          lightColor="#F5EFF8"
          onPress={() => navigation.navigate('IntervalsScreen')}
        />
        <FeatureCard
          title="STOPWATCH"
          color="#FF921C"
          lightColor="#FFF4E7"
          icon="⏱"
          onPress={() => navigation.navigate('StopWatchScreen')}
        />
      </View>

      <View style={styles.featuredSection}>
        <View style={[styles.sectionHeader,styles.contentPadding]}>
          <Text style={styles.sectionTitle}>Featured Workouts</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.workoutScroll}
        >
          <Pressable style={styles.workoutCard}>
            <Image
              source={require('../assets/images/jabRoutine.jpg')}
              style={styles.workoutImage}
            />
            <View style={styles.imageOverlay} />
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>ROUNDS</Text>
            </View>
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutTitle}>Heavy Bag Jabs Routine</Text>
              <Text style={styles.workoutDuration}>40 minutes</Text>
            </View>
          </Pressable>
          <Pressable style={styles.workoutCard}>
            <Image
              source={require('../assets/images/jabRoutine.jpg')}
              style={styles.workoutImage}
            />
            <View style={styles.imageOverlay} />
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>STOPWATCH</Text>
            </View>
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutTitle}>Heavy Bag Workout</Text>
              <Text style={styles.workoutDuration}>40 minutes</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}

export default MainScreenGo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentPadding:{
    paddingHorizontal:horizontalScale(30)
  },
  features: {
    paddingTop: verticalScale(24),
    gap: moderateScale(16),
  },
  featuredSection: {
    marginTop: verticalScale(35),

  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    color: '#292929',
  },
  workoutScroll: {
    paddingHorizontal: horizontalScale(30),
    gap: moderateScale(15),
    marginTop: verticalScale(18),
  },
  workoutCard: {
    width: horizontalScale(327),
    height: verticalScale(188),
    borderRadius: moderateScale(16),
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  workoutImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  categoryBadge: {
    position: 'absolute',
    top: verticalScale(17),
    left: horizontalScale(13),
    paddingHorizontal: horizontalScale(11),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(15),
    backgroundColor: '#91AF4C',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    fontWeight: '500',
  },
  workoutInfo: {
    position: 'absolute',
    left: horizontalScale(17),
    bottom: verticalScale(16),
  },
  workoutTitle: {
    color: '#FFFFFF',
    fontSize: moderateScale(17),
    fontWeight: '500',
  },
  workoutDuration: {
    color: '#BEBEBE',
    fontSize: moderateScale(15),
    marginTop: verticalScale(4),
  },
});
