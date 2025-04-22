
export interface Product {
  id: string;
  name: string;
  price: number;
  availability: boolean;
  platform: string;
}

export interface PlatformPrice {
  platform: string;
  price: number;
  availability: boolean;
}

export interface CombinedProduct {
  name: string;
  prices: PlatformPrice[];
  lowestPrice: number;
  bestPlatform: string;
}
