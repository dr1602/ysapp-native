import { createContext } from 'react';

import { StoreContextType } from '@/constants/types/StateType';

const defaultStoreContextValue: StoreContextType = {
  products: [],
  cart: [],
  addProduct: (product: any) => {},
  deleteProduct: (productId: any) => {},
  cartPrice: 0,
  updateCartPrice: () => {},
  thisProductIsInCart: (productId: any) => {},
};

export const StoreContext = createContext<StoreContextType>(
  defaultStoreContextValue
);
