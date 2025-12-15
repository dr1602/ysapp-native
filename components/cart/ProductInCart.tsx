import { useContext } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { config } from '@/src/config/config';
import { StoreContext } from '@/src/context/storeContext';
import { colors } from '@/src/resources/constants';

export const ProductInCart = (item: any) => {
  const { deleteProduct } = useContext(StoreContext);
  const { id, images, name, price } = item;

  const onDelete = () => {
    deleteProduct(id);
  };

  return (
    <View key={id} style={styles.container}>
      <Image
        resizeMode='cover'
        source={{
          uri: images[0].src,
          headers: {
            Authorization: config.liveLinkCredentials,
          },
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>{name}</Text>
      <Text style={styles.itemTitle}>$ {price}</Text>
      <Pressable style={styles.itemRemoveContainer} onPress={onDelete}>
        <Text style={styles.itemRemove}>X</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemImage: {
    width: (Dimensions.get('window').width / 100) * 15,
    height: (Dimensions.get('window').width / 100) * 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemTitle: {
    width: (Dimensions.get('window').width / 100) * 45,
    marginHorizontal: (Dimensions.get('window').width / 100) * 5,
    fontWeight: '300',
  },
  itemPrice: {
    width: (Dimensions.get('window').width / 100) * 15,
    fontWeight: 'bold',
  },
  itemRemoveContainer: {
    width: (Dimensions.get('window').width / 100) * 5,
  },
  itemRemove: {
    color: colors.grey,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
