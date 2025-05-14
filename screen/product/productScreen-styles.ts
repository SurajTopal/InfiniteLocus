import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  imageContainer: ImageStyle;
  cartContainer: ViewStyle;
  countText: TextStyle;
  title: TextStyle;
  listContainer: ViewStyle;
  point: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
  },
  imageContainer: {
    height: height * 0.45,
    width: width * 0.92,
    borderRadius: 20,
  },
  cartContainer: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F4777C',
    alignItems: 'center',
    width: width * 0.25,
    marginTop: height * 0.01,
    justifyContent: 'space-evenly',
  },
  countText: {
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: height * 0.01,
  },
  listContainer: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    width: width * 0.9,
    borderColor: '#EAEAEA',
  },
  point: {
    fontWeight: '500',
    fontSize: 17,
  },
});

export {styles};
