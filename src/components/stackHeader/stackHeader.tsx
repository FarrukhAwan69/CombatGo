import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/index';

type StackHeaderProps = {
  title: string;
  onPress: () => void;
  rightComponent?: React.ReactNode;
};


function StackHeader({
  title,
  onPress,
  rightComponent,
}: StackHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.header,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <Pressable
        style={styles.backButton}
        onPress={onPress}
      >
        <Text style={styles.backArrow}>‹</Text>
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      {rightComponent ? (
        rightComponent
      ) : (
        <View style={styles.rightSpacer} />
      )}
    </View>
  );
}

export default StackHeader;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(90),
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },

  backButton: {
    width: horizontalScale(40),
    height: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },

  backArrow: {
    fontFamily: 'Montserrat',
    fontSize: moderateScale(20),
  },

  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(20),
    color: '#2583b2',
  },

  rightSpacer: {
    width: horizontalScale(40),
  },
});