import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductDetailsScreen } from '@/components/products/ProductDetailsScreen';
import { ProductsScreen } from '@/components/products/ProductsScreen';

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Products' component={ProductsScreen} />
      <Stack.Screen name='Products Details' component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
