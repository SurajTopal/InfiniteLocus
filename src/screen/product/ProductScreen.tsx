import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button/Button';
import Toast from 'react-native-toast-message';
import {Icon} from 'react-native-elements';

import {styles} from './productScreen-styles';
import { useAuth } from '../../auth-context';

interface IProductScreen {
  route: {
    params: {
      productData: {
        image: string;
        name: string;
        ingredients: string[];
        instructions: string[];
      };
    };
  };
}

export default function ProductScreen(props: IProductScreen) {
  const {
    route: {
      params: {productData},
    },
  } = props;
  const {image, name, ingredients, instructions} = productData;
  const [productCount, setProductCount] = useState(0);
  const {productInCart, setProductInCart} = useAuth();

  const navigation = useNavigation<any>();


  const renderList = (list: string[]) => {
    return (
      <View style={styles.listContainer}>
        {list.map(data => (
          <Text>
            <Text style={styles.point}>{`• `}</Text>
            {data}
          </Text>
        ))}
      </View>
    );
  };

  const addProduct = () => {
    if (productCount < 5) {
      const productIndex = productInCart.findIndex(
        (product: any) => product.name === name,
      );

      if (productIndex !== -1) {
        let productList = productInCart;
        productList[productIndex] = {
          ...productList[productIndex],
          productCount: productCount + 1,
        };

        setProductInCart([...productList]);
      } else {
        setProductInCart(cart => [...cart, {name, image, productCount: 1}]);
      }
      setProductCount(prevCount => prevCount + 1);
    } else {
      Toast.show({text1: 'Item limit Reached', type: 'info'});
    }
  };

  const removeProduct = () => {
    const productIndex = productInCart.findIndex(
      (product: any) => product.name === name,
    );
    if (productCount === 1) {
      let productList = productInCart;

      productList.splice(productIndex, 1);

      setProductInCart([...productList]);
      setProductCount(prevCount => prevCount - 1);
    } else if (productCount > 1) {
      if (productIndex !== -1) {
        let productList = productInCart;
        productList[productIndex] = {
          ...productList[productIndex],
          productCount: productCount - 1,
        };

        setProductInCart([...productList]);
      }

      setProductCount(prevCount => prevCount - 1);
    } else
      Toast.show({
        text1: 'Cannot Remove Item',
        type: 'info',
      });
  };

  const onCartPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.subContainer}>
        <Image source={{uri: image}} style={styles.imageContainer} />
        <Text numberOfLines={1} style={styles.title}>
          {name}
        </Text>
        <View>
          <View style={styles.cartContainer}>
            <TouchableOpacity onPress={removeProduct}>
              <Icon name="minus" type="feather" color={'#FF0000'} size={30} />
            </TouchableOpacity>
            <TextInput style={styles.countText}>{productCount}</TextInput>
            <TouchableOpacity onPress={addProduct}>
              <Icon name="plus" type="feather" color={'#00B680'} size={30} />
            </TouchableOpacity>
          </View>
          <Button
            title="Check Cart"
            icon="shopping-cart"
            handleOnPress={onCartPress}
          />
        </View>
        <Text style={styles.title}>Instructions</Text>
        {renderList(instructions)}
        <Text style={styles.title}>Ingredients</Text>
        {renderList(ingredients)}
      </View>
    </ScrollView>
  );
}
