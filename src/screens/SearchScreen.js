import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/Yelp';

const SearchScreen = () => {
  const [State, setState] = useState ('');
  const [Result, setResult] = useState ([]);
  const [ErrorMessage, setErrorMessage] = useState ('');

  const searchApi = async initialState => {
    try {
      const response = await yelp.get ('/search', {
        params: {
          limit: 50,
          term: initialState,
          location: 'san jose',
        },
      });

      setResult (response.data.businesses);
    } catch (err) {
      setErrorMessage ('Failed , try again later');
    }
  };

  // searchApi("sushi")             //   do not use this , it causes infinite rendering
  useEffect (() => {
    searchApi ('sushi');
  }, []);

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
