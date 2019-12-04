import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ShowDetailsScreen = ({navigation}) => {
  const id = navigation.getParam ('id'); //  to get info from another screen use getParam  inside navigation and  ask  param name , in my case it is "id "  which sended from ResultsList  component

  return (
    <View>
      <Text>Show screen</Text>
    </View>
  );
};
const styles = StyleSheet.create ({});

export default ShowDetailsScreen;
