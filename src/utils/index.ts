import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// iPhone 17e screen size in points (390 x 844) — matches the device you designed on
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const horizontalScale = (size: number) =>
  (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;