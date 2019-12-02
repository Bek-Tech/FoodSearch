import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
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
          return <ResultsDetail restaurant={item} />;
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

export default ResultsList;
