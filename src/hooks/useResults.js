import React, {useState, useEffect} from 'react';
import yelp from '../api/Yelp';

export default () => {
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
    searchApi ('restaurant');
  }, []);
  return [searchApi, Result, ErrorMessage];
};
