import { ProductsScreen } from '@/components/products/ProductsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Products' component={ProductsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProductsStack;
