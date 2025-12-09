import { ReactElement, useEffect, useState } from 'react';

import { config } from '../config/config';
import { apiFetch } from '../services/apis/apiFetch';
import { StoreContext } from './storeContext';

interface GlobalStateProps {
  children: ReactElement;
}

export const GlobalState = ({ children }: GlobalStateProps) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const newProdcuts = await apiFetch(
      `${config.siteUrl}products?${config.wcCredentials}`
    );
    console.log(newProdcuts);
    setProducts(newProdcuts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <StoreContext.Provider value={{ products }}>
      {children}
    </StoreContext.Provider>
  );
};
