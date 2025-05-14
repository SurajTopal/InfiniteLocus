import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useAuth} from '../../auth-context';

import {styles} from './cartScreen-styles';

export default function CartScreen() {
  const {productInCart} = useAuth();

  const renderCard = (product: any) => {
    const {name, image, productCount} = product;

    return (
      <View style={styles.productContainer}>
        <View>
          <Image
            source={{uri: image}}
            style={{height: 100, width: 100, borderRadius: 20}}
          />
          <Text>{name}</Text>
          <Text>Quantity : {productCount}</Text>
        </View>
        <Text>Quantity*100 ={productCount * 100}</Text>
      </View>
    );
  };

  const getTotalPrice = () => {
    const totalQuantity = productInCart.reduce((ac: number, product: any) => {
      return (ac += product.productCount);
    }, 0);

    return totalQuantity * 100;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Item </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {productInCart.map((product: any) => renderCard(product))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text style={styles.text}>Total Price</Text>
        <Text style={styles.text}>{getTotalPrice()}</Text>
      </View>
    </View>
  );
}
