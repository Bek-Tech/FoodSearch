import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [State, setState] = useState ('');
  return (
    <View>
      <SearchBar
        state={State}
        onStateChange={change => setState (change)}
        onChangeSubmit={() => console.log (submitted)}
      />
      <Text>Search Screen {State}</Text>

    </View>
  );
};

const styles = StyleSheet.create ({});

export default SearchScreen;
