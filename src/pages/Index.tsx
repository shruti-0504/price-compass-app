
import React from "react";
import { getAllProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

const Index = () => {
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Price Compass
          </h1>
          <p className="text-lg text-gray-600">
            Compare prices across multiple platforms to find the best deals
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
