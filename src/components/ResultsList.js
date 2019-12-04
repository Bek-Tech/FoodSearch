import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
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
              onPress={() => navigation.navigate ('Details', {id: item.id})}
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
