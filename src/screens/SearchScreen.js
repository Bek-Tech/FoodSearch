import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/Yelp';

const SearchScreen = () => {
  const [State, setState] = useState ('');
  const [Result, setResult] = useState ([]);

  const searchApi = async () => {
    const response = await yelp.get ('/search', {
      params: {
        limit: 50,
        term: State,
        location: 'san jose',
      },
    });

    setResult (response.data.businesses);
  };
  return (
    <View>
      <SearchBar
        state={State}
        // onStateChange={change => setState (change)}   condensed
        onStateChange={setState}
        onChangeSubmit={searchApi}
      />
      <Text>We found {Result.length} results</Text>

    </View>
  );
};

const styles = StyleSheet.create ({});

export default SearchScreen;
