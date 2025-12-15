import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProductDetailsScreenProps } from '@/constants/types/ProductTypes';
import { config } from '@/src/config/config';
import { colors, sizes } from '@/src/resources/constants';
import { Header } from '../header/Header';

export const ProductDetailsScreen = ({ route }: ProductDetailsScreenProps) => {
  return (
    <SafeAreaView>
      <Header route={''} navigation={''} />
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode='cover'
            style={styles.itemImage}
            source={{
              uri: route.images[0].src,
              headers: {
                Authorization: config.liveLinkCredentials,
              },
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemPrice}>{`$ ${route.price}`}</Text>
          <Text style={styles.itemTitle}> {route.name}</Text>
          <Text style={styles.itemDescription}>
            {route.description.replace(/<[^>]+>/g, '') || 'Lorem Lorem Lorem'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height -
          sizes.headerHeight -
          sizes.ctaButton * 2 +
          10 -
          50
        : Dimensions.get('window').height -
          sizes.headerHeight -
          sizes.ctaButton * 2 +
          10,
  },
  imageContainer: {
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    overflow: 'hidden',
  },
  itemImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  textContainer: {
    padding: 16,
  },
  itemPrice: {
    color: colors.darkGrey,
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  itemTitle: {
    color: colors.grey,
    fontSize: 20,
    lineHeight: 20,
    marginBottom: 16,
  },
  itemDescription: {
    color: colors.darkGrey,
    fontSize: 16,
  },
  buttonContainer: {
    height: sizes.ctaButton * 2,
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 8,
  },
  buttonTextAdd: {
    color: colors.white,
    fontWeight: 'bold',
  },
  buttonAdd: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  buttonTextDelete: {
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  buttonDelete: {
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
});
