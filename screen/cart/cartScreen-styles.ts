import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  productContainer: ViewStyle;
  footerContainer: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    borderColor: '#EAEAEA',
  },
  footerContainer: {
    backgroundColor: '#EAEAEA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export {styles};
