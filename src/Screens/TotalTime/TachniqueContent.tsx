import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { moderateScale } from '../../utils/index';
import TechniqueRow from '../../components/techniqueRow/TechniqueRow';

const techniqueStats = [
  { label: 'Submissions Attempted', value: 4 },
  { label: 'Submissions Executed', value: 2 },
  { label: 'Takedowns Attempted', value: 3 },
  { label: 'Takedowns Executed', value: 4 },
  { label: 'Throws', value: 2 },
  { label: 'Pins', value: 1 },
  { label: 'Reversals', value: 2 },
];

function TechniqueContent() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {techniqueStats.map((stat) => (
        <TechniqueRow key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </ScrollView>
  );
}

export default TechniqueContent;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
  },
});