import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={results => results.id}
        showsHorizontalScrollIndicator={false}
        // important !!!  use destruction in renderItem    not  (item)  but ({item}) to get object
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate ('Details', {id: item.id})} //  to give ifo to another screen use second param in navigation.navigate ("indicator of  screen ", {param name: info you wanted to sent})
            >
              <ResultsDetail restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default withNavigation (ResultsList);
