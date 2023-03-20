export interface IProduct {
  id: string;
  store: IStore;
  name: string;
  mainImgUrl: IProductImage;
  otherImgsUrl: IProductImage[];
  isFavorite: boolean;
  category: string;
  price: number;
  totalSold: number;
  shippingInfo: IShippingInfo;
  description: string[];
  features: IProductFeature;
  sellerInfo: ISellerInfo;
  reviews: IProductReview;
}

export interface IStore {
  username: string;
  name: string;
}

export interface IShippingInfo {
  delivery: string;
  shipping: string;
  arrivalDuration: number;
}

export interface ISellerInfo {
  lastActive: string;
  responseRate: number;
}

export interface IProductReview {
  averageRating: number;
  totalReviews: number;
  ratings: IRating;
  imageReview: {
    url: IProductImage[];
    remaining: string;
  };
  topUserReviews: {
    name: string;
    imgUrl: string;
    rating: number;
    tags: string[];
  }[];
}

export type IProductFeature = {
  [key: string]: string;
};

export interface IRatingInfo {
  count: number;
  percentage: number;
}

type IRating = {
  [key: number]: IRatingInfo;
};

interface IProductImage {
  webp: string;
  fallback: string;
}

export interface IBanner {
  tag?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  img: IProductImage;
}
