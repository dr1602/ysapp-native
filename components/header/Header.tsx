import { When } from 'react-if';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { HeaderProps } from '@/constants/types/HeaderTypes';
import { sizes } from '@/src/resources/constants';

export const Header = ({ route, navigation }: HeaderProps) => {
  const isProductScreen: boolean = route.name === 'Products';
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <When condition={!isProductScreen}>
        <Pressable onPress={handlePress}>
          <Image
            style={styles.arrowIcon}
            source={{ uri: '@/assets//header/go-back-icon.png' }}
          />
        </Pressable>
      </When>
      <Image style={styles.logo} source={{ uri: '@/assets/header/logo.png' }} />
      <Image
        style={styles.cartBtn}
        source={{ uri: '@/assets/header/cart-icon.png' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: sizes.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  arrowIcon: {
    width: 25,
    height: 21,
  },
  logo: {
    width: 96,
    height: 17,
  },
  cartBtn: {
    width: 25,
    height: 25,
  },
});
