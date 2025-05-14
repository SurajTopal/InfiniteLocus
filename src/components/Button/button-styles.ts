import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: '#F4777C',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});

export {styles};
