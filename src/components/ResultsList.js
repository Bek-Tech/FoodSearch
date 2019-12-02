import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ResultsList = ({title, results}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={results => results.id}
        // important !!!  use destruction in renderItem    not  (item)  but ({item}) to get object
        renderItem={({item}) => {
          return <Text> {item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ResultsList;
