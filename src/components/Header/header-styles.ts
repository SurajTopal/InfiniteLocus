import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;

  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: '#F4777C',
    padding: 15,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
});

export {styles};
