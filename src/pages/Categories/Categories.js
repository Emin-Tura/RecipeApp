import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';

import styles from './Categories.Style';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import CategoryCard from '../../components/Card/CategoryCard';
import useFetch from '../../Hooks/useFetch';

function Categories({navigation}) {
  const {loading, error, data: categorieData} = useFetch(Config.CATEGORIES);

  const renderData = ({item}) => (
    <CategoryCard
      meals={item}
      onSelect={() => handleCategoriySelect(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const handleCategoriySelect = strCategory => {
    navigation.navigate('MealsScreen', {strCategory});
  };

  return (
    <View style={styles.container}>
      <FlatList data={categorieData.categories} renderItem={renderData} />
    </View>
  );
}

export default Categories;
