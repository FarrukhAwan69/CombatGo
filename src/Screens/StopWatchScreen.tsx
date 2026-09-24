import React, { useEffect, useState } from 'react';
import OptionSelector from '../components/optionSelector/OptionSelector';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from 'react-native';
import StackHeader from '../components/stackHeader/stackHeader';
import { horizontalScale, verticalScale, moderateScale } from '../utils/index';

function StopWatchScreen({ navigation }: any) {
  const [activityName, setActivityName] = useState('Morning Workout');
  const [sport, setSport] = useState('Muay Thai');
  const [activityType, setActivityType] = useState('Sparring');
  const [newActivityName, setNewActivityName] = useState('Morning Workout');
  const [newSport, setNewSport] = useState('Muay Thai');
  const [newActivityType, setNewActivityType] = useState('Sparring');
  const [modalVisible, setModalVisible] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const interval = setInterval(() => {
      setElapsedTime(previousTime => previousTime + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };
  const toggleTimer = () => {
  if (!isRunning) {
    // Start the stopwatch
    setIsRunning(true);
  } else {
    // Stop/pause the stopwatch
    setIsRunning(false);

    // Move to Total Time screen
    navigation.navigate('TotalTimeScreen', {
      elapsedTime: elapsedTime,
    });
  }
};
  const stopTimer = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };
  const openSettings = () => {
    setNewActivityName(activityName);
    setNewSport(sport);
    setNewActivityType(activityType);
    setModalVisible(true);
  };
  const saveActivity = () => {
    setActivityName(newActivityName);
    setSport(newSport);
    setActivityType(newActivityType);
    setModalVisible(false);
  };
  return (
    <View style={styles.stopwatch}>
      <StackHeader title="Stopwatch" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.sportType}>
          <View>
            <Text style={styles.activityName}>{activityName}</Text>
            <Text style={styles.sportText}>{sport} · Training</Text>
          </View>
          <Pressable style={styles.editButton} onPress={openSettings}>
            <Text style={styles.editIcon}>✎</Text>
          </Pressable>
        </View>
        <View style={styles.outerCircle}>
          <View style={styles.middleCircle}>
            <View style={styles.innerCircle}>
              <View style={styles.dottedCircle}>
                <Text style={styles.sparing}>{activityType.toUpperCase()}</Text>
                <Text style={styles.timing}>{formatTime(elapsedTime)}</Text>
                <View style={styles.totalTime}>
                  <Text style={styles.totalTimeText}>
                    {formatTime(elapsedTime)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.controls}>
          <Pressable style={styles.smallButton} onPress={openSettings}>
            <Text style={styles.settingsIcon}>⚙</Text>
          </Pressable>
          <Pressable style={styles.playButton} onPress={toggleTimer}>
            <Text style={styles.playPauseIcon}>{isRunning ? 'Ⅱ' : '▶'}</Text>
          </Pressable>
          <Pressable style={styles.smallButton} onPress={stopTimer}>
            <View style={styles.stopIcon} />
          </Pressable>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Activity Name & Type</Text>
            <Text style={styles.inputLabel}>Activity Name</Text>
            <TextInput
              style={styles.input}
              value={newActivityName}
              onChangeText={setNewActivityName}
              placeholder="Morning Routine"
              placeholderTextColor="#999"
            />
            <Text style={styles.inputLabel}>Choose Sport</Text>
            <OptionSelector
              value={newSport}
              options={['Muay Thai', 'Boxing', 'Kickboxing', 'MMA']}
              onSelect={setNewSport}
              placeholder="Choose Sport"
            />
            <Text style={styles.inputLabel}>Choose Activity Type</Text>
            <OptionSelector
              value={newActivityType}
              options={[
                'Sparring',
                'Heavy Bag',
                'Pad Work',
                'KickBoxing',
                'Freestyle',
              ]}
              onSelect={setNewActivityType}
              placeholder="Activity Type"
            />
            <Pressable style={styles.saveButton} onPress={saveActivity}>
              <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
export default StopWatchScreen;

const styles = StyleSheet.create({
  stopwatch: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    marginVertical: verticalScale(40),
  },
  sportType: {
    width: '100%',
    height: verticalScale(110),
    backgroundColor: '#F7931E',
    borderRadius: moderateScale(25),
    paddingHorizontal: horizontalScale(25),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activityName: {
    color: 'white',
    fontSize: moderateScale(25),
    fontWeight: '700',
  },
  sportText: {
    color: 'white',
    fontSize: moderateScale(18),
    marginTop: verticalScale(8),
  },
  editButton: {
    width: horizontalScale(48),
    height: verticalScale(48),
    borderRadius: moderateScale(24),
    backgroundColor: '#E98B18',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    color: '#222',
    fontSize: moderateScale(25),
    fontWeight: 'bold',
  },
  outerCircle: {
    width: moderateScale(290),
    height: moderateScale(290),
    borderRadius: moderateScale(145),
    borderWidth: moderateScale(15),
    borderColor: '#3988B3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  middleCircle: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(125),
    borderWidth: moderateScale(10),
    borderColor: '#F0A02F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: moderateScale(230),
    height: moderateScale(230),
    borderRadius: moderateScale(115),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dottedCircle: {
    width: moderateScale(215),
    height: moderateScale(215),
    borderRadius: moderateScale(108),
    borderWidth: moderateScale(1),
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sparing: {
    color: '#F7931E',
    fontSize: moderateScale(22),
    fontWeight: '500',
    marginBottom: verticalScale(15),
  },
  timing: {
    color: '#202020',
    fontSize: moderateScale(50),
    fontWeight: '700',
  },
  totalTime: {
    backgroundColor: '#2E82B2',
    paddingHorizontal: horizontalScale(22),
    paddingVertical: verticalScale(9),
    borderRadius: moderateScale(30),
    marginTop: verticalScale(12),
  },
  totalTimeText: {
    color: 'white',
    fontSize: moderateScale(22),
    fontWeight: '600',
  },
  controls: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: verticalScale(25),
    paddingHorizontal: horizontalScale(25),
  },
  smallButton: {
    width: horizontalScale(64),
    height: verticalScale(64),
    borderRadius: moderateScale(32),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(5),
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
  playButton: {
    width: horizontalScale(80),
    height: verticalScale(80),
    borderRadius: moderateScale(40),
    backgroundColor: '#2E82B2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playPauseIcon: {
    color: 'white',
    fontSize: moderateScale(35),
    fontWeight: '700',
  },
  settingsIcon: {
    fontSize: moderateScale(30),
    color: '#2E82B2',
  },
  stopIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    borderRadius: moderateScale(5),
    backgroundColor: '#2E82B2',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.40)',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(33),
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: moderateScale(24),
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(35),
  },
  modalTitle: {
    color: '#2E82B2',
    fontSize: moderateScale(25),
    fontWeight: '700',
    marginBottom: verticalScale(30),
  },
  inputLabel: {
    color: '#222',
    fontSize: moderateScale(20),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(20),
    fontWeight: '600',
  },
  input: {
    height: verticalScale(56),
    borderWidth: moderateScale(2),
    borderColor: '#F0F0F0',
    borderRadius: moderateScale(35),
    paddingHorizontal: horizontalScale(24),
    fontSize: moderateScale(18),
    color: '#333',
  },
  saveButton: {
    height: verticalScale(60),
    borderRadius: moderateScale(30),
    backgroundColor: '#2E82B2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(35),
  },
  saveButtonText: {
    color: 'white',
    fontSize: moderateScale(23),
    fontWeight: '600',
  },
});
