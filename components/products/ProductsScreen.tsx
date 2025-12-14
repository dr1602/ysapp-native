import { useContext } from 'react';
import { Dimensions, FlatList, Platform, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StoreContext } from '@/src/context/storeContext';
import { sizes } from '../../src/resources/constants';

export const ProductsScreen = () => {
  const { products } = useContext(StoreContext);
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={products}
        renderItem={(item: any) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height - sizes.headerHeight - 30 - 50
        : Dimensions.get('window').height - sizes.headerHeight - 30,
  },
});
