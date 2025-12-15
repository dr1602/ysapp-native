import { ItemType } from './ProductTypes';

export interface StoreContextType {
  products: ItemType[];
  cart: ItemType[];
  addProduct: (product: ItemType) => void;
  deleteProduct: (producId: number) => void;
  cartPrice: number;
  updateCartPrice?: () => void;
  setCart?: (newCart: ItemType[]) => void;
}
