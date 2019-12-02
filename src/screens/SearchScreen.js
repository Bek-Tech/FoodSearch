import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [State, setState] = useState ('');
  const [searchApi, Result, ErrorMessage] = useResults ();

  const filterByPrice = price => {
    return Result.filter (result => result.price === price);
  };

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
      <ResultsList results={filterByPrice ('$')} title="Cost Effective" />
      <ResultsList results={filterByPrice ('$$')} title="Bit Pricer" />
      <ResultsList results={filterByPrice ('$$$')} title="Big Spender" />

    </View>
  );
};

const styles = StyleSheet.create ({});

export default SearchScreen;
