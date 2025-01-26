import { defineQuery } from "next-sanity";

// Fetch all products
export const allProducts = defineQuery(`
  *[_type == "products"]{
    _id,
    name,
    description,
    price,
    "slug": slug,
    "imageUrl": image.asset->url,
    sizes,
    colors,
    discountPercent
  }
`);

// Fetch a single product by slug
export const getProductQuery = defineQuery(`
  *[_type == "products" && slug.current == $slug][0] {
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    sizes,
    colors,
    discountPercent
  }
`);
