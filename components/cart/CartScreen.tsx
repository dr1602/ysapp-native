import { useContext } from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StoreContext } from '@/src/context/storeContext';
import { colors, sizes } from '@/src/resources/constants';
import { Header } from '../header/Header';

export const CartScreen = () => {
  const { cart, cartPrice } = useContext(StoreContext);
  return (
    <SafeAreaView>
      <Header route={''} navigation={''} />
      <FlatList
        style={styles.productsContainer}
        data={cart}
        renderItem={(item: any) => <Text>{item.text}</Text>}
      />
      <View style={styles.resumeContainer}>
        <Text style={styles.resumeText}>Total</Text>
        <Text style={styles.resumePrice}>$ {cartPrice}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height - sizes.headerHeight - 160 - 50
        : Dimensions.get('window').height - sizes.headerHeight - 160,
  },
  resumeContainer: {
    height: sizes.ctaButton,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGrey,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  resumeText: {
    color: colors.darkGrey,
  },
  resumePrice: {
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  buttonCheckout: {
    height: sizes.ctaButton,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  textCheckout: {
    color: colors.lightGrey,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
