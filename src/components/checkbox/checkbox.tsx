import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

function Checkbox({ checked, onPress }: any) {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <View
        style={[
          styles.checkbox,
          checked && styles.checked,
        ]}
      >
        {checked && (
          <Text style={styles.checkmark}>✓</Text>
        )}
      </View>
    </Pressable>
  );
}

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkbox: {
    width: 22,
    height: 22,

    borderWidth: 2,
    borderColor: 'gray',

    borderRadius: 4,

    justifyContent: 'center',
    alignItems: 'center',
  },

  checked: {
    backgroundColor: '#2583b2',
    borderColor: '#2583b2',
  },

  checkmark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});