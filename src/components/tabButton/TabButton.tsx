import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../utils/index';

type TabButtonProps = {
  label: string;
  active: boolean;
  onPress: () => void;
};

function TabButton({ label, active, onPress }: TabButtonProps) {
  return (
    <Pressable
      style={[styles.tab, active && styles.activeTab]}
      onPress={onPress}
    >
      <Text style={[styles.tabText, active && styles.activeTabText]}>
        {label}
      </Text>
    </Pressable>
  );
}

export default TabButton;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(25),
  },
  activeTab: {
    backgroundColor: 'white',
  },
  tabText: {
    fontSize: moderateScale(14),
    color: '#999',
  },
  activeTabText: {
    color: '#2E82B2',
  },
});