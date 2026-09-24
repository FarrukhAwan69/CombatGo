import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { verticalScale, moderateScale } from '../../utils/index';

type TechniqueRowProps = {
  label: string;
  value: number | string;
};

function TechniqueRow({ label, value }: TechniqueRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowText}>{label}</Text>
      <Text style={styles.number}>{value}</Text>
    </View>
  );
}

export default TechniqueRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(22),
  },
  rowText: {
    fontSize: moderateScale(15),
  },
  number: {
    backgroundColor: '#EAF2F7',
    color: '#2E82B2',
    padding: moderateScale(8),
    borderRadius: moderateScale(20),
  },
});