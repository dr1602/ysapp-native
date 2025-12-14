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
  navigation: any;
}

export type RouteType = {
  name: string;
  price: number;
  description: string;
  images: ImageType[];
};

export interface ProductDetailsScreenProps {
  route: RouteType;
}
