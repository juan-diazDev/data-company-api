const Product = require('./product.model');

async function getProducts() {
  const product = await Product.findAll();

  return product;
}

async function getSingleProduct(query) {
  const singleProduct = await Product.findOne(query);

  return singleProduct;
}

async function createProduct(product) {
  const newProduct = await Product.create(product);

  return newProduct;
}

module.exports = {
  getProducts,
  createProduct,
  getSingleProduct,
};
