export interface Product {
  _id: string;
  name: string; // Product name
  productName?: string; // Optional alias for name
  price: number;
  description?: string;
  slug: { current: string }; // Slug object
  imageUrl?: string; // URL for the product image
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  inventory: number;
  category?: string; // Optional category field
  discountPercent?: number; // Optional discount field
  colors?: string[]; // Optional colors array
  sizes?: string[]; // Optional sizes array
}
