import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#42EC9C',
          },
        }}>
        <Stack.Screen name="CategoriesScreen" component={Categories} />
        <Stack.Screen name="MealsScreen" component={Meals} />
        <Stack.Screen name="DetailsScreen" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
