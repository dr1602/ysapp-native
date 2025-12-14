import { useContext } from 'react';
import { Dimensions, FlatList, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '@/components/header/Header';
import { StoreContext } from '@/src/context/storeContext';
import { sizes } from '../../src/resources/constants';
import { ProductItem } from './ProductItem';

export const ProductsScreen = () => {
  const { products } = useContext(StoreContext);
  return (
    <SafeAreaView>
      <Header />
      <FlatList
        style={styles.container}
        data={products}
        renderItem={(item: any) => <ProductItem item={item} />}
        numColumns={2}
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
