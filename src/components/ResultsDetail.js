import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultsDetail = ({restaurant}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: restaurant.image_url}} />
      <Text style={styles.name}> {restaurant.name}</Text>
      <Text>{restaurant.rating} Stars , {restaurant.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    marginLeft: 10,
  },

  image: {
    width: 250,
    height: 130,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ResultsDetail;
