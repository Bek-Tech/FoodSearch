import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/Yelp';

const ShowDetailsScreen = ({navigation}) => {
  const id = navigation.getParam ('id'); //  to get info from another screen use getParam  inside navigation and  ask  param name , in my case it is "id "  which sended from ResultsList  component
  const [Result, setResult] = useState (null); //  null -  means  we do not have initial  state, I use this because  from yelp api we`ll get an obj  , therefore no need to wrap this inside array , obj or string
  const restaurantId = async id => {
    const response = await yelp.get (`/${id}`);

    setResult (response.data);
  };
  useEffect (() => {
    restaurantId (id);
  }, []);

  //  without if  statement you will get error message , this statement tells do not show anything  if we do not or till  we have result
  if (!Result) {
    return null;
  }

  return (
    <View>
      <Text>{Result.name}</Text>
      <FlatList
        data={Result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return (
            <Image style={{height: 250, width: 250}} source={{uri: item}} />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create ({});

export default ShowDetailsScreen;
