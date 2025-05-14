import {StyleSheet, ViewStyle, Dimensions, TextStyle} from 'react-native';

const {width, height} = Dimensions.get('screen');

interface Styles {
  container: ViewStyle;
  inputContainer: ViewStyle;
  divider: TextStyle;
  searchButton: ViewStyle;
  searchText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    height: height * 0.05,
  },
  inputContainer: {
    flex: 1,
    padding: 10,
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
  },
  divider: {
    fontSize: 18,
    fontWeight: '500',
  },
  searchButton: {
    padding: 10,
  },
  searchText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export {styles};
