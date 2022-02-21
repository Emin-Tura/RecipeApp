import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../Hooks/useFetch';
import Config from 'react-native-config';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './Details.Style';
import DetailCard from '../../components/Card/DetailCard';

function Details({route}) {
  const {idMeal} = route.params;
  const {
    loading,
    error,
    data: mealDetails,
  } = useFetch(`${Config.MEAL_DETAIL}${idMeal}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const detailsPage = ({item}) => <DetailCard mealsDetail={item} />;

  return (
    <View>
      <FlatList data={mealDetails.meals} renderItem={detailsPage} />
    </View>
  );
}

export default Details;
