import Cloths from "@/app/components/Cloths";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/Navbar";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

// Query to fetch the product
const getProductQuery = groq`*[_type == "products" && slug.current == $slug][0] {
  _id,
  name,
  price,
  description,
  "imageUrl": image.asset->url,
  sizes,
  colors,
  discountPercent
}`;

async function getProduct(slug: string) {
  return client.fetch(getProductQuery, { slug });
}

interface ProductDetailsProps {
  params: { slug: string }; // Accepting the slug as route param
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { slug } = params;

  // Fetch product data server-side
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-red-500">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-full mx-auto px-4 py-8 bg-blue-50">
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-blue-50 ml-24">
          <div className="relative aspect-square w-full h-full overflow-hidden">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover rounded-lg shadow-md"
              />
            ) : (
              <div className="h-64 bg-gray-300 flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>
          <div className="flex flex-col ">
            <h1 className="text-4xl font-semibold text-gray-800 mb-3">{product.name}</h1>
            <p className="text-2xl font-semibold text-gray-600 ">${product.price}</p>

            {product.discountPercent && (
              <p className="text-xl font-semibold text-red-500 mt-2">
                Discount: {product.discountPercent}% off
              </p>
            )}
            <div className="flex items-center mb-6">
              <span className="text-yellow-400 text-2xl font-semibold">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
              <span className="ml-2 text-sm text-gray-600">(150 Reviews)</span>
            </div>

            {/* Product Highlights */}
            <div className="mt-2">
              <h3 className="text-2xl font-semibold text-gray-800">Product Highlights</h3>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>High-quality material</li>
                <li>Available in multiple sizes</li>
                <li>Perfect for everyday use</li>
                <li>Easy care and maintenance</li>
              </ul>
            </div>

            {/* Sizes in Horizontal Layout */}
            {product.sizes && (
              <div className="mt-4 mb-3">
                <h3 className="text-xl font-semibold text-gray-800">Available Sizes:</h3>
                <div className="flex gap-4 mt-2">
                  {product.sizes.map((size: string, index: Key | null | undefined) => (
                    <div key={index} className="px-4 py-2 bg-gray-200 rounded-lg text-center font-semibold text-gray-700">
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Colors as Color Balls */}
            {product.colors && (
              <div className="mt-3 flex gap-2">
                <p className="text-sm text-gray-600">Available Colors:</p>
                {product.colors.map((color: string, index: Key | null | undefined) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-gray-700 text-base mt-4">{product.description}</p>

            {/* Add to Cart Section */}
            <div className="mt-1">
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="max-w-[1440px] mx-auto md:grid-cols-2 gap-6 px-8 mt-12 mb-6">
          <img
            src="/321.png"
            alt="About Us"
            className="w-full h-[250px] object-cover rounded-lg shadow-md hover:opacity-90 transition duration-300"
          />
        </div>
        <Cloths />
      </div>
      <Footer />
    </>
  );
}
