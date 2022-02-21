import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';

import styles from './MealCard.Style';

function MealCard({mealsFilter, onSelect}) {
  const {strMeal, strMealThumb} = mealsFilter;

  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: strMealThumb}} />
        <Text style={styles.title}>{strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MealCard;
