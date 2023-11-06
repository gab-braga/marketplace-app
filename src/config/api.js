const BASE_URL = "http://localhost:8080";

export const ENDPOINTS = {
  // public
  getPublicProducts: () => `${BASE_URL}/public/products`,
  getPublicProduct: (id) => `${BASE_URL}/public/products/${id}`,
  getPublicProductsByCategory: (category) =>
    `${BASE_URL}/public/products/category/${category}`,
  getPublicProductsByName: (name) =>
    `${BASE_URL}/public/products/search/${name}`,
};
