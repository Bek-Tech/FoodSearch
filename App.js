import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ShowDetailsScreen from './src/screens/ShowDetailsScreen';

const navigation = createStackNavigator (
  {
    Search: SearchScreen,
    Details: ShowDetailsScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurant Search',
    },
  }
);

export default createAppContainer (navigation);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
