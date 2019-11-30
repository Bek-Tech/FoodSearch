import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({state, onStateChange, onChangeSubmit}) => {
  return (
    <View style={styles.barStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={state}
        onChangeText={onStateChange}
        onEndEditing={onChangeSubmit}
      />

    </View>
  );
};

const styles = StyleSheet.create ({
  barStyle: {
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    alignSelf: 'center',
    fontSize: 35,
    marginHorizontal: 10,
  },
});

export default SearchBar;
