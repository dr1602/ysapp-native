import { ReactElement, useEffect, useState } from 'react';

import { config } from '../config/config';
import { apiFetch } from '../services/apis/apiFetch';
import { StoreContext } from './storeContext';

interface GlobalStateProps {
  children: ReactElement;
}

interface StoreProps {
  products: any[];
  cart: any[];
  cartPrice: number;
}

export const GlobalState = ({ children }: GlobalStateProps) => {
  const [store, setStore] = useState<StoreProps>({
    products: [],
    cart: [],
    cartPrice: 0,
  });

  const addProduct = (product: any) => {
    const newCart = [...store.cart, product];

    setStore((prev) => ({
      ...prev,
      cart: newCart,
    }));
  };

  const deleteProduct = (productId: any) => {
    const position = store.cart.findIndex(
      (product) => product.id === productId
    );

    if (position >= 0) {
      const newCart = [...store.cart];
      newCart.splice(position, 1);
      setStore((prev) => ({
        ...prev,
        cart: newCart,
      }));
    }
  };

  const updateCartPrice = () => {
    let newCartPrice: number = 0;

    store.cart.map(
      (product) => (newCartPrice = newCartPrice + parseFloat(product.price))
    );

    setStore((prev) => ({ ...prev, price: newCartPrice }));
  };

  const setCart = (newCart: any[]) => {
    setStore((prev) => ({
      ...prev,
      cart: newCart,
    }));
  };

  const fetchProducts = async () => {
    const newProdcuts = await apiFetch(
      `${config.siteUrl}products?${config.wcCredentials}`
    );

    setStore((prev) => ({
      ...prev,
      products: newProdcuts,
    }));
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    updateCartPrice();
  }, [updateCartPrice, store.cart]);

  return (
    <StoreContext.Provider
      value={{
        products: store.products,
        cart: store.cart,
        setCart: setCart,
        addProduct,
        deleteProduct,
        cartPrice: store.cartPrice,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
