import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './CategoryCard.Style';

function CategoryCard({meals, onSelect}) {
  const {strCategoryThumb, strCategory} = meals;
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: strCategoryThumb}} />
        <Text style={styles.cardText}>{strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryCard;
