export interface IProduct {
  store: IStore;
  name: string;
  mainImgUrl: string;
  otherImgsUrl: string[];
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
    url: string[];
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
