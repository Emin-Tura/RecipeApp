import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';

import styles from './DetailCard.Style';

function DetailCard({mealsDetail}) {
  const {strMeal, strArea, strInstructions, strMealThumb, strYoutube} =
    mealsDetail;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: strMealThumb}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{strMeal}</Text>
        <Text style={styles.area}>{strArea}</Text>
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.instructions}>{strInstructions}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Linking.openURL(`${strYoutube}`);
        }}>
        <Text style={styles.btnText}>How to Make It?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DetailCard;
