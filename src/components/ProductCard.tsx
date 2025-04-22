
import React from "react";
import { Card } from "@/components/ui/card";
import { CombinedProduct } from "../types/product";

interface ProductCardProps {
  product: CombinedProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
      <div className="space-y-2">
        {product.prices.map(({ platform, price, availability }) => (
          <div
            key={platform}
            className={`flex justify-between items-center p-2 rounded ${
              platform === product.bestPlatform
                ? "bg-green-100 font-semibold"
                : "bg-gray-50"
            }`}
          >
            <span className="text-sm">{platform}</span>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm ${
                  availability ? "text-green-600" : "text-red-500"
                }`}
              >
                {availability ? "In Stock" : "Out of Stock"}
              </span>
              <span className="font-medium">${price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Best Price</span>
          <span className="text-lg font-bold text-green-600">
            ${product.lowestPrice.toFixed(2)}
          </span>
        </div>
        <div className="text-sm text-gray-500 mt-1">
          Best deal on: {product.bestPlatform}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
