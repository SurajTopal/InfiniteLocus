import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import SearchBar from '../../components/searchBar/SearchBar';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button/Button';
import axios from 'axios';

import {styles} from './landingScreen-styles';

export default function LandingScreen() {
  const [menu, setMenu] = useState([]);

  const navigation = useNavigation<any>();

  useEffect(() => {
    axios
      .get('https://dummyjson.com/recipes')
      .then(response => {
        setMenu(response.data.recipes);
      })
      .catch(error => {
        console.error('Error : ', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.title}>Eat what makes you happy</Text>
      <FlatList
        data={menu}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        initialNumToRender={15}
        keyExtractor={items => items.id.toString()}
        columnWrapperStyle={{marginBottom: 20, justifyContent: 'space-between'}}
        renderItem={({item, index}) => {
          const {image, name, ingredients, instructions} = item;
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                navigation.navigate('Product', {
                  productData: {
                    name,
                    image,
                    ingredients,
                    instructions,
                  },
                });
              }}>
              <Image source={{uri: image}} style={styles.imageContainer} />
              <Text style={styles.dishName}>{name}</Text>
            </TouchableOpacity>
          );
        }}
        numColumns={3}
      />
    </View>
  );
}
