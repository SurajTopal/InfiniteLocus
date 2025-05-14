import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './searchBar-styles';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder="Search Food Item"
        placeholderTextColor={'#BEC6D6'}
      />
      <Text style={styles.divider}>|</Text>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
