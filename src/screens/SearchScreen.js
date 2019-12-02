import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [State, setState] = useState ('');
  const [searchApi, Result, ErrorMessage] = useResults ();

  return (
    <View>
      <SearchBar
        state={State}
        // onStateChange={change => setState (change)}   condensed
        onStateChange={setState}
        onChangeSubmit={() => searchApi (term)}
      />
      <Text>We found {Result.length} results</Text>
      {ErrorMessage ? <Text>{ErrorMessage}</Text> : null}

    </View>
  );
};

const styles = StyleSheet.create ({});

export default SearchScreen;
