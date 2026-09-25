import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import StackHeader from '../components/stackHeader/stackHeader';
import TabButton from '../components/tabButton/TabButton';

import TechniqueContent from './TotalTime/TachniqueContent';
import TimersContent from './TotalTime/TimersContent';
import DetailsContent from './TotalTime/DetailsContent';
import { horizontalScale, verticalScale, moderateScale } from '../utils/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TABS = [
  { key: 'technique', label: 'Technique' },
  { key: 'timers', label: 'Timers' },
  { key: 'details', label: 'Details' },
] as const;

type TabKey = (typeof TABS)[number]['key'];

function TotalTimeScreen({ navigation, route }: any) {
  const insets = useSafeAreaInsets();

  const { elapsedTime, activityName, sport, activityType } = route.params;

  const [selectedTab, setSelectedTab] = useState<TabKey>('technique');

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };

  const renderContent = () => {
    if (selectedTab === 'technique') {
      return <TechniqueContent />;
    }

    if (selectedTab === 'timers') {
      return (
        <TimersContent onResume={resumeWorkout} onFinish={finishAndSave} />
      );
    }

    if (selectedTab === 'details') {
      return <DetailsContent />;
    }

    return null;
  };

  const resumeWorkout = () => {
    navigation.navigate('StopWatchScreen', {
      elapsedTime,
      activityName,
      sport,
      activityType,
      resume: true,
    });
  };

  const finishAndSave = () => {
    console.log('Workout saved');
  };

  return (
    <View style={styles.container}>
      <StackHeader title="Total Time" onPress={() => navigation.goBack()} />

      <View style={[styles.totalTimeContainer, { paddingTop: insets.top }]}>
        <Text style={styles.totalTimeLabel}>TOTAL TIME</Text>
        <Text style={styles.totalTime}>{formatTime(elapsedTime)}</Text>
      </View>

      <View style={styles.tabs}>
        {TABS.map(tab => (
          <TabButton
            key={tab.key}
            label={tab.label}
            active={selectedTab === tab.key}
            onPress={() => setSelectedTab(tab.key)}
          />
        ))}
      </View>

      <View style={styles.content}>{renderContent()}</View>

      <View style={[styles.bottomButtons, { paddingBottom: insets.bottom }]}>
        <Pressable style={styles.finishButton} onPress={finishAndSave}>
          <Text style={styles.finishButtonText}>Finish & Save</Text>
        </Pressable>

        <Pressable style={styles.resumeButton} onPress={resumeWorkout}>
          <Text style={styles.resumeButtonText}>Resume</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default TotalTimeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  totalTimeContainer: {
    alignItems: 'center',
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(20),
  },

  totalTimeLabel: {
    fontFamily: 'Montserrat-Primary',
    fontSize: moderateScale(16),
    color: '#222',
  },

  totalTime: {
    fontSize: moderateScale(42),
    fontFamily: 'Montserrat-Bold',
    color: '#2E82B2',
    marginTop: verticalScale(12),
  },

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    borderRadius: moderateScale(30),
    marginHorizontal: horizontalScale(20),
    padding: moderateScale(4),
  },

  content: {
    flex: 1,
  },

  bottomButtons: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(18),
    gap: moderateScale(12),
    marginBottom: verticalScale(25),
  },

  finishButton: {
    flex: 1,
    height: verticalScale(50),
    borderRadius: moderateScale(26),
    borderWidth: moderateScale(2),
    borderColor: '#2E82B2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  finishButtonText: {
    color: '#2E82B2',
    fontSize: moderateScale(15),
    fontFamily: 'Montserrat-Bold',
  },

  resumeButton: {
    flex: 1,
    height: verticalScale(50),
    borderRadius: moderateScale(26),
    backgroundColor: '#2E82B2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  resumeButtonText: {
    color: 'white',
    fontSize: moderateScale(15),
    fontFamily: 'Montserrat-Bold',
  },
});
