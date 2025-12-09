import { Text } from 'react-native';
import 'react-native-reanimated';

import { GlobalState } from '@/src/context/GlobalState';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <GlobalState>
      <Text> Hola Mundo</Text>
    </GlobalState>
  );
}
