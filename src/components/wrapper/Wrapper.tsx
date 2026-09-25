import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type WrapperProps = {
  children: React.ReactNode;

  safeTop?: boolean;
  safeBottom?: boolean;

  style?: StyleProp<ViewStyle>;
};

function Wrapper({
  children,
  safeTop = false,
  safeBottom = false,
  style,
}: WrapperProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,

        safeTop && {
          paddingTop: insets.top,
        },

        safeBottom && {
          paddingBottom: insets.bottom,
        },

        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Wrapper;