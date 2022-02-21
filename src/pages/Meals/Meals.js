import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../Hooks/useFetch';
import Config from 'react-native-config';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './Meals.Style';
import MealCard from '../../components/Card/MealCard';

function Meals({route, navigation}) {
  const {strCategory} = route.params;
  const {
    loading,
    error,
    data: categoryFilter,
  } = useFetch(`${Config.CATEGORY_FILTER}${strCategory}`);

  const renderData = ({item}) => (
    <MealCard
      mealsFilter={item}
      onSelect={() => handleDetailSelect(item.idMeal)}
    />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const handleDetailSelect = idMeal => {
    navigation.navigate('DetailsScreen', {idMeal});
  };
  return (
    <View>
      <FlatList data={categoryFilter.meals} renderItem={renderData} />
    </View>
  );
}

export default Meals;
