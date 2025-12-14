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
import { colors } from '@/src/resources/constants';

export const ProductItem = ({ item, navigation }: ProductItemProps) => {
  const { id, name, price, images } = item;

  const handlePress = () => {
    navigation.navigate('Product Details', { product: item });
  };
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
          <Text style={styles.itemPrice}>{`$ ${item.price}`}</Text>
          <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
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
