"use client";

import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

/** Type definition for a product */
type Product = {
  inventory: number;
  _id: string;
  name: string;
  price: number;
  description: string;
  slug: { current: string };
  imageUrl: string;
  category: string;
  colors?: string[]; // Added colors field
  discountPercent?: number; // Added discountPercent field
};

const Cloths = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("All");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
        setTotalPages(Math.ceil(fetchedProducts.length / itemsPerPage));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const maxDescriptionLength = 120;
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleDescription = (productId: string) => {
    setExpanded((prev) => (prev === productId ? null : productId));
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    if (!product.inventory) product.inventory = 1;
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: "Your Product Successfully Added to cart!",
      showConfirmButton: false,
      timer: 3500,
    });
    addToCart(product);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriceRange(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterApply = () => {
    setCurrentPage(1); // Reset to first page when applying filters
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesPrice = (() => {
      if (selectedPriceRange === "All") return true;
      const price = product.price;
      switch (selectedPriceRange) {
        case "0-50":
          return price >= 0 && price <= 50;
        case "50-100":
          return price > 50 && price <= 100;
        case "100-200":
          return price > 100 && price <= 200;
        case "200-300":
          return price > 200 && price <= 300;
        case "300+":
          return price > 300;
        default:
          return true;
      }
    })();

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-12">
      <h2 className="text-5xl font-extrabold mb-4 text-center text-purple-900 drop-shadow-lg">Bestseller Products</h2>
      <p className="text-gray-600 text-center mb-10 text-lg">Our most popular items this season</p>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-8 bg-white p-8 rounded-xl shadow-xl">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-1/3 mb-4 md:mb-0"
        />

        <div className="flex flex-wrap gap-4 w-full md:w-2/3 items-center">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="ml-24 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/5"
          >
            <option value="All">All Categories</option>
            <option value="Shirt">Shirt</option>
            <option value="Pant">Pant</option>
            <option value="Jacket">Jacket</option>
          </select>

          <select
            value={selectedPriceRange}
            onChange={handlePriceRangeChange}
            className="ml-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/5"
          >
            <option value="All">All Prices</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-300">$200 - $300</option>
            <option value="300+">$300+</option>
          </select>

          <button
            onClick={handleFilterApply}
            className="px-6 py-2 bg-blue-600 ml-auto text-white text-lg font-bold rounded-lg hover:bg-blue-800 transition duration-300 shadow-lg w-full md:w-auto"
          >
            Apply Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            key={product._id}
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.imageUrl && (
                <div className="relative w-full h-64">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 truncate text-center">
                  {product.name}
                </h2>
                <p className="text-xl font-semibold text-blue-600 mt-2 text-center">${product.price}</p>

                {/* Display Discount if available */}
                {product.discountPercent && (
                  <p className="text-md font-bold text-red-500 text-center mt-2">
                    {product.discountPercent}% OFF
                  </p>
                )}

                {/* Display Colors if available */}
                {product.colors && (
                  <div className="mt-3 flex justify-center gap-2">
                    <p className="text-sm text-gray-600">Available Colors:</p>
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Link>
            <div className="text-gray-500 text-sm px-6 text-center">
              {product.description.length > maxDescriptionLength
                ? `${product.description.slice(0, maxDescriptionLength)}...`
                : product.description}
              {product.description.length > maxDescriptionLength && (
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => toggleDescription(product._id)}
                >
                  {expanded === product._id ? " Read Less" : " Read More"}
                </span>
              )}
              {expanded === product._id && (
                <p className="text-gray-500 text-sm mt-1">{product.description}</p>
              )}
            </div>
            <button
              className="text-white justify-center ml-24 place-items-center font-bold hover:shadow-lg bg-blue-500 py-3 px-8 rounded-xl mb-4 mt-4 hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-800 disabled:bg-gray-400 shadow-lg"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-2 text-sm font-bold rounded-lg shadow-md transition-colors duration-300 ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-blue-600 text-white hover:bg-blue-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-800 disabled:bg-gray-400 shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cloths;
