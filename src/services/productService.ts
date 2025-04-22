
import { Product, CombinedProduct, PlatformPrice } from "../types/product";
import amazonData from "../data/AMAZON.json";
import flipkartData from "../data/FLIPKART.json";
import ebayData from "../data/EBAY.json";
import shopcluesData from "../data/SHOPCLUES.json";

export const getAllProducts = (): CombinedProduct[] => {
  const allProducts: Product[] = [
    ...amazonData,
    ...flipkartData,
    ...ebayData,
    ...shopcluesData,
  ];

  const productMap = new Map<string, PlatformPrice[]>();

  // Group products by name
  allProducts.forEach((product) => {
    const existing = productMap.get(product.name) || [];
    productMap.set(product.name, [
      ...existing,
      {
        platform: product.platform,
        price: product.price,
        availability: product.availability,
      },
    ]);
  });

  // Convert map to array and calculate lowest price
  const combinedProducts: CombinedProduct[] = Array.from(
    productMap.entries()
  ).map(([name, prices]) => {
    const availablePrices = prices.filter((p) => p.availability);
    const lowestPrice =
      availablePrices.length > 0
        ? Math.min(...availablePrices.map((p) => p.price))
        : Math.min(...prices.map((p) => p.price));
    const bestPlatform =
      prices.find((p) => p.price === lowestPrice)?.platform || "N/A";

    return {
      name,
      prices: prices.sort((a, b) => a.price - b.price), // Sort prices within each product
      lowestPrice,
      bestPlatform,
    };
  });

  // Sort by lowest price
  return combinedProducts.sort((a, b) => a.lowestPrice - b.lowestPrice);
};
