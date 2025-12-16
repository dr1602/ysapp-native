import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { config } from '@/src/config/config';
import { colors, sizes } from '@/src/resources/constants';
import { get } from '@/src/services/apis/apiActions';
import { Header } from '../header/Header';

type CheckoutStateType = {
  paymentGateways: any[];
  name: string;
  email: string;
  currentPG: undefined | string;
};

const initialState = {
  paymentGateways: [],
  name: '',
  email: '',
  currentPG: undefined,
};

export const CheckoutScreen = () => {
  const [checkoutState, setCheckoutState] =
    useState<CheckoutStateType>(initialState);

  const handleChangeName = (data: string) => {
    setCheckoutState((prev) => ({
      ...prev,
      name: data,
    }));
  };

  const handleChangeEmail = (data: string) => {
    setCheckoutState((prev) => ({
      ...prev,
      name: data,
    }));
  };

  const handleChangePg = (data: string) => {
    setCheckoutState((prev) => ({
      ...prev,
      currentPG: data,
    }));
  };

  const fetchPaymentGateways = async () => {
    const paymentGatewayList = await get(
      `${config.siteUrl}payment_gateways?${config.wcCredentials}`
    );

    const enabledPaymentGateway = paymentGatewayList.filter(
      (pg: any) => pg.enabled
    );
    setCheckoutState((prev) => ({
      ...prev,
      paymentGateways: enabledPaymentGateway,
    }));
  };

  useEffect(() => {
    fetchPaymentGateways();
  }, []);

  return (
    <SafeAreaView>
      <Header route={''} navigation={''} />
      <ScrollView style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(newName) => handleChangeName(newName)}
          value={checkoutState.name}
          placeholder='name'
        />
        <TextInput
          style={styles.input}
          onChangeText={(newEmail) => handleChangeEmail(newEmail)}
          value={checkoutState.name}
          placeholder='email'
        />
        <Text style={styles.titleDropdown}> Métodos de pago</Text>
        <Picker
          style={styles.dropdown}
          selectedValue={checkoutState.currentPG}
          onValueChange={(currentPg) => handleChangePg(currentPg)}
        >
          {checkoutState.paymentGateways.map((pg) => (
            <Picker.Item key={pg.id} label={pg.title} value={pg.id} />
          ))}
        </Picker>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height - sizes.headerHeight - 160 - 50
        : Dimensions.get('window').height - sizes.headerHeight - 160,
  },
  input: {
    fontSize: 16,
    marginHorizontal: 8,
    marginVertical: 8,
    padding: 4,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  titleDropdown: {
    marginTop: 16,
    textAlign: 'center',
    borderStyle: 'solid',
    borderBottomColor: colors.green,
  },
  dropdown: {
    marginHorizontal: 8,
    padding: 0,
  },
  buttonBuyContainer: {
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
  textBuy: {
    color: colors.lightGrey,
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageContainer: {
    marginHorizontal: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  textMessage: {
    color: colors.darkGrey,
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonGoBackContainer: {
    height: sizes.ctaButton,
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  textGoBack: {
    color: colors.lightGrey,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
