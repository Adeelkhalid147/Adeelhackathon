export interface slugType {
  _type: string;
  current: string;
}

export interface assetimageType {
  _type: string;
  _ref: string;
}

export interface imagesType {
  asset: assetimageType;
  _type: string;
  alt: string;
  _key: string;
}

export interface oneProductType {
  slug: any;
  quantity: number;
  _rev: string;
  productName: string;
  _createdAt: string;
  _id: string;
  _updatedAt: string;
  image: Array<imagesType>;
  description: any;
  productTypes: Array<string>;
  size: Array<string>;
  price: number;
}

export interface responseType {
  result: Array<oneProductType>;
}
