import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [State, setState] = useState ('');
  const [searchApi, Result, ErrorMessage] = useResults ();

  const filterByPrice = price => {
    return Result.filter (result => result.price === price);
  };

  return (
    //  Important !!!  for android  add flex : 1  style property  to parrent container , it fixes visibility content on the bottom or   use  <> ...  </>  instead  <View>... </View>
    (
      <View style={{flex: 1}}>
        <SearchBar
          state={State}
          // onStateChange={change => setState (change)}   condensed
          onStateChange={setState}
          onChangeSubmit={() => searchApi (State)}
        />
        {ErrorMessage ? <Text>{ErrorMessage}</Text> : <Text> </Text>}
        <ScrollView>
          <ResultsList
            navigation={navigation}
            results={filterByPrice ('$')}
            title="Cost Effective"
          />
          <ResultsList
            navigation={navigation}
            results={filterByPrice ('$$')}
            title="Bit Pricer"
          />
          <ResultsList
            navigation={navigation}
            results={filterByPrice ('$$$')}
            title="Big Spender"
          />
        </ScrollView>
      </View>
    )
  );
};

const styles = StyleSheet.create ({});

export default SearchScreen;
