import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/index';

type FeatureCardProps = {
  title: string;
  color: string;       // main accent color (icon bg, text, arrow text)
  lightColor: string;  // light background for the arrow circle
  icon?: string;        // optional emoji/icon character
  onPress: () => void;
};

function FeatureCard({ title, color, lightColor, icon, onPress }: FeatureCardProps) {
  return (
    <Pressable style={styles.featureCard} onPress={onPress}>
      <View style={[styles.iconCircle, { backgroundColor: color }]}>
        {icon ? <Text style={styles.icon}>{icon}</Text> : null}
      </View>
      <Text style={[styles.featureTitle, { color }]}>{title}</Text>
      <View style={[styles.arrowCircle, { backgroundColor: lightColor }]}>
        <Text style={[styles.arrow, { color }]}>›</Text>
      </View>
    </Pressable>
  );
}

export default FeatureCard;

const styles = StyleSheet.create({
  featureCard: {
    height: verticalScale(85),
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(17),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(9),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(5),
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  iconCircle: {
    width: horizontalScale(68),
    height: horizontalScale(68),
    borderRadius: horizontalScale(34),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: moderateScale(32),
  },
  featureTitle: {
    fontSize: moderateScale(23),
    fontWeight: '700',
    marginLeft: horizontalScale(17),
    letterSpacing: 0.3,
  },
  arrowCircle: {
    width: horizontalScale(35),
    height: horizontalScale(35),
    borderRadius: horizontalScale(18),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: horizontalScale(8),
  },
  arrow: {
    fontSize: moderateScale(29),
    lineHeight: verticalScale(30),
    fontWeight: '300',
  },
});