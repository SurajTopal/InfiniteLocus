import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './header-styles';

export default function Header(props) {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
