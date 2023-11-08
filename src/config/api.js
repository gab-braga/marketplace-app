const BASE_URL = "http://localhost:8080";

export const ENDPOINTS = {
  // public
  getPublicProducts: () => `${BASE_URL}/public/products`,
  getPublicProduct: (id) => `${BASE_URL}/public/products/${id}`,
  getPublicProductsByCategory: (category) =>
    `${BASE_URL}/public/products/category/${category}`,
  getPublicProductsByName: (name) =>
    `${BASE_URL}/public/products/search/${name}`,

  // auth
  postLogin: () => `${BASE_URL}/auth/login`,
  postSignup: () => `${BASE_URL}/auth/register`,

  // client - profile
  getClientProfile: (id) => `${BASE_URL}/client/profile/${id}`,
  getClientAddress: (id) => `${BASE_URL}/client/profile/${id}/address`,
  putClientProfile: (id) => `${BASE_URL}/client/profile/${id}`,
  putClientAddress: (id) => `${BASE_URL}/client/profile/${id}/address`,
  putClientPassword: (id) => `${BASE_URL}/client/profile/${id}/password`,
  putClientPhoto: (id) => `${BASE_URL}/client/profile/${id}/photo`,

  // client - cart
  getClientCart: (id) => `${BASE_URL}/client/cart/${id}`,
  postClientCart: (id) => `${BASE_URL}/client/cart/${id}/add`,
  putClientCart: (id) => `${BASE_URL}/client/cart/${id}/item`,
  postClientCartFinish: (id) => `${BASE_URL}/client/cart/${id}/finish`,

  // client - orders
  getClientOrders: (id) => `${BASE_URL}/client/orders/${id}`,
  getClientOrdersProduct: (idU, idP) =>
    `${BASE_URL}/client/orders/${idU}/products/${idP}`,
  getClientOrdersPurchase: (id) => `${BASE_URL}/client/orders/purchase/${id}`,
  postClientOrdersEvaluate: (id) => `${BASE_URL}/client/orders/${id}/evaluate`,

  // admin - users
  getAdminUsers: () => `${BASE_URL}/admin/users`,
  getAdminUser: (id) => `${BASE_URL}/admin/users/${id}`,
  putAdminUserEnable: (id) => `${BASE_URL}/admin/users/${id}/enable`,
  putAdminUserDisable: (id) => `${BASE_URL}/admin/users/${id}/disable`,

  // admin - products
  getAdminProducts: () => `${BASE_URL}/admin/products`,
  getAdminProduct: (id) => `${BASE_URL}/admin/products/${id}`,
  postAdminProduct: () => `${BASE_URL}/admin/products`,
  putAdminProduct: (id) => `${BASE_URL}/admin/products/${id}`,

  // admin - purchases
  getAdminPurchases: () => `${BASE_URL}/admin/purchases`,
  getAdminPurchase: (id) => `${BASE_URL}/admin/purchases/${id}`,
  getAdminPurchaseItems: (id) => `${BASE_URL}/admin/purchases/${id}/items`,
  putAdminPurchaseStatus: (id) => `${BASE_URL}/admin/purchases/${id}/status`,
};
