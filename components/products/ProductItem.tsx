import { useContext, useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { ProductItemProps } from '@/constants/types/ProductTypes';
import { config } from '@/src/config/config';
import { StoreContext } from '@/src/context/storeContext';
import { colors } from '@/src/resources/constants';

export const ProductItem = ({ item, navigation }: ProductItemProps) => {
  const [productButtonIcon, setProductButtonIcon] = useState<string>('');
  const { id, name, price, images } = item;
  const { cart, thisProductIsInCart, deleteProduct, addProduct } =
    useContext(StoreContext);

  const addIcon: string = '@/assets/product/add-to-cart-icon.png';
  const deleteIcon: string = '@/assets/product/remove-from-cart-icon.png';

  const handlePress = () => {
    navigation.navigate('Product Details', { product: item });
  };

  const handlePressProductButton = () => {
    if (thisProductIsInCart && thisProductIsInCart(Number(id))) {
      deleteProduct(Number(id));
    } else {
      addProduct(item);
    }
  };

  useEffect(() => {
    if (thisProductIsInCart && thisProductIsInCart(Number(id))) {
      setProductButtonIcon(deleteIcon);
    } else {
      setProductButtonIcon(addIcon);
    }
  }, [setProductButtonIcon, thisProductIsInCart, id]);

  return (
    <View key={id} style={styles.itemContainer}>
      <Pressable onPress={handlePress}>
        <Image
          resizeMode='cover'
          style={styles.itemImage}
          source={{
            uri: images[0].src,
            headers: {
              Authorization: config.liveLinkCredentials,
            },
          }}
        />
      </Pressable>
      <View style={styles.itemData}>
        <View style={styles.itemData}>
          <Text style={styles.itemPrice}>{`$ ${price}`}</Text>
          <Text style={styles.itemTitle}>{name}</Text>
        </View>
        <Pressable onPress={handlePressProductButton}>
          <Image
            style={styles.productBtn}
            source={{ uri: productButtonIcon }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get('window').width / 2,
    padding: 8,
    alignContent: 'center',
  },
  itemImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 4,
  },
  itemData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemMeta: {
    width: '70%',
  },
  itemTitle: {
    color: colors.darkGrey,
    fontWeight: '300',
  },
  itemPrice: {
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  itemBtn: {
    width: '25%',
  },
  productBtn: {
    width: 30,
    height: 30,
  },
});
