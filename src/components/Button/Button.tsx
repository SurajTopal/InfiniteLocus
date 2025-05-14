import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import {styles} from './button-styles';

interface IButton {
  icon?: string;
  title: string;
  handleOnPress: () => void;
}

export default function Button(props: IButton) {
  const {icon, title, handleOnPress} = props;

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      {icon && <Icon name={icon} type="feather" color="white" style={styles.icon}/>}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
