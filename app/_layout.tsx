import { NavigationContainer } from '@react-navigation/native';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GlobalState } from '@/src/context/GlobalState';
import ProductsStack from '@/src/context/productStack/ProductStack';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GlobalState>
          <ProductsStack />
        </GlobalState>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
