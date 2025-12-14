export type ImageType = {
  src: string;
};

export type ItemType = {
  id: string;
  name: string;
  price: number;
  images: ImageType[];
};

export interface ProductItemProps {
  item: ItemType;
}
