import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

type OptionSelectorProps = {
  value: string;
  options: string[];
  onSelect: (option: string) => void;
  placeholder?: string;
};

function OptionSelector({
  value,
  options,
  onSelect,
  placeholder = 'Select an option',
}: OptionSelectorProps) {

  const [isOpen, setIsOpen] = useState(false);


  const handleSelect = (option: string) => {

    onSelect(option);

    setIsOpen(false);

  };


  return (
    <View style={styles.container}>

      {/* =========================
          SELECT BOX
      ========================= */}

      <Pressable
        style={styles.selector}
        onPress={() => setIsOpen(previous => !previous)}
      >

        <Text
          style={[
            styles.selectedText,
            !value && styles.placeholderText,
          ]}
          numberOfLines={1}
        >
          {value || placeholder}
        </Text>


        <Text style={styles.arrow}>
          {isOpen ? '⌃' : '⌄'}
        </Text>

      </Pressable>


      {/* =========================
          OPTIONS
      ========================= */}

      {isOpen && (

        <View style={styles.optionsContainer}>

          {options.map((option) => (

            <Pressable
              key={option}
              style={styles.option}
              onPress={() => handleSelect(option)}
            >

              <Text style={styles.optionText}>
                {option}
              </Text>

            </Pressable>

          ))}

        </View>

      )}

    </View>
  );
}

export default OptionSelector;


const styles = StyleSheet.create({

  container: {
    width: '100%',
    position: 'relative',
    zIndex: 10,
  },


  selector: {
    height: 68,

    borderWidth: 2,
    borderColor: '#F0F0F0',

    borderRadius: 35,

    paddingHorizontal: 24,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    backgroundColor: 'white',
  },


  selectedText: {
    flex: 1,

    color: '#777',

    fontSize: 18,

    marginRight: 10,
  },


  placeholderText: {
    color: '#999',
  },


  arrow: {
    color: '#2E82B2',

    fontSize: 28,

    fontWeight: '500',

    lineHeight: 28,
  },


  optionsContainer: {
    marginTop: 6,

    borderRadius: 15,

    borderWidth: 1,

    borderColor: '#EEEEEE',

    backgroundColor: 'white',

    overflow: 'hidden',

    elevation: 5,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.12,

    shadowRadius: 6,
  },


  option: {
    paddingHorizontal: 24,

    paddingVertical: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#F2F2F2',
  },


  optionText: {
    fontSize: 18,

    color: '#333',
  },

});