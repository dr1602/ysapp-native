import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartScreen } from '@/components/cart/CartScreen';
import { CheckoutScreen } from '@/components/checkout/CheckoutScreen';
import { ProductDetailsScreen } from '@/components/products/ProductDetailsScreen';
import { ProductsScreen } from '@/components/products/ProductsScreen';

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Products' component={ProductsScreen} />
      <Stack.Screen name='Products Details' component={ProductDetailsScreen} />
      <Stack.Screen name='Cart' component={CartScreen} />
      <Stack.Screen name='Checkout' component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
