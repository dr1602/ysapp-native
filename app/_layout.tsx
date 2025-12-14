import { Text, View } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GlobalState } from '@/src/context/GlobalState';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GlobalState>
        <View>
          <Text> Hola Mundo</Text>
        </View>
      </GlobalState>
    </SafeAreaProvider>
  );
}
