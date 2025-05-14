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
  title: TextStyle;
  card: ViewStyle;
  imageContainer: ImageStyle;
  dishName: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    marginVertical: height * 0.02,
    fontSize: 20,
    fontWeight: '600',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    borderColor: '#EAEAEA',
  },
  imageContainer: {
    height: height * 0.12,
    width: width * 0.24,
    borderRadius: 50,
  },
  dishName: {
    width: width * 0.28,
    textAlign: 'center',
    marginTop: 5,
  },
});

export {styles};
