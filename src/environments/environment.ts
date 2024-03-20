export const environment = {
  categoriesUrl: 'https://api.mercadolibre.com/sites/MLB/categories',
  productUrl: (productId: string) => `https://api.mercadolibre.com/items/${productId}`,
  searchUrl: 'https://api.mercadolibre.com/sites/MLB/search',
};
