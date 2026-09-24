import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import Checkbox from '../../components/checkbox/checkbox';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/index';

type Timer = {
  id: number;
  time: string;
  name: string;
};

const timers: Timer[] = [
  {
    id: 1,
    time: '23:10',
    name: 'Sparring',
  },
  {
    id: 2,
    time: '13:34',
    name: 'Open Mat',
  },
  {
    id: 3,
    time: '13:12',
    name: 'Bag',
  },
  {
    id: 4,
    time: '08:17',
    name: 'Pad',
  },
  {
    id: 5,
    time: '13:10',
    name: 'Drill',
  },
  {
    id: 6,
    time: '12:24',
    name: 'Compt TRN',
  },
];

function TimersContent({ onResume, onFinish }: any) {
  const [selectedTimers, setSelectedTimers] = useState<number[]>([
    4,
  ]);

  const toggleTimer = (id: number) => {
    setSelectedTimers(previous => {
      if (previous.includes(id)) {
        return previous.filter(timerId => timerId !== id);
      }

      return [...previous, id];
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {timers.map(timer => {
        const isSelected = selectedTimers.includes(timer.id);

        return (
          <View
            key={timer.id}
            style={styles.timerRow}
          >

            <Text
              style={[
                styles.time,
                isSelected && styles.selectedTime,
              ]}
            >
              {timer.time}
            </Text>

            <Text
              style={[
                styles.name,
                isSelected && styles.selectedName,
              ]}
            >
              {timer.name}
            </Text>

            <Checkbox
              checked={isSelected}
              onPress={() => toggleTimer(timer.id)}
            />

          </View>
        );
      })}
    </ScrollView>
  );
}

export default TimersContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(25),
  },

  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(24),
  },

  time: {
    width: horizontalScale(70),
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#222',
  },

  selectedTime: {
    color: '#2E82B2',
  },

  name: {
    flex: 1,
    fontSize: moderateScale(15),
    color: '#777',
  },

  selectedName: {
    color: '#2E82B2',
  },

  bottomButtons: {
    flexDirection: 'row',
    gap: moderateScale(12),
    marginTop: verticalScale(15),
  },

  finishButton: {
    flex: 1,
    height: verticalScale(50),
    borderRadius: moderateScale(26),
    borderWidth: moderateScale(2),
    borderColor: '#2E82B2',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  finishButtonText: {
    color: '#2E82B2',
    fontSize: moderateScale(15),
    fontWeight: '600',
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
    fontWeight: '600',
  },
});