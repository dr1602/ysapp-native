import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ProductsScreen } from '@/components/products/ProductsScreen';
import { GlobalState } from '@/src/context/GlobalState';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GlobalState>
        <ProductsScreen />
      </GlobalState>
    </SafeAreaProvider>
  );
}
