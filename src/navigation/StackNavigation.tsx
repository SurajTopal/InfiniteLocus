import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screen/landing/LandingScreen';
import ProductScreen from '../screen/product/ProductScreen';
import CartScreen from '../screen/cart/CartScreen';
import Header from '../components/header/Header';
const Stack = createNativeStackNavigator();

const AppStack = () => {


  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Zomato"
        component={LandingScreen}
        options={{
          headerShown: true,
          header: () => <Header title="Zomato" />,
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          headerShown: true,
          header: () => <Header title="Product" />,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: true,
          header: () => <Header title="Cart" />,
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return <AppStack />;
};

export default Navigation;
