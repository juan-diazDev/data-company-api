const {
  createProduct,
  getProducts,
  getSingleProduct,
} = require('./product.service');

async function getAllProductsHandler(_, res) {
  try {
    const companies = await getProducts();
    return res.status(200).json(companies);
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
}

async function getSingleProductHandler(req, res) {
  try {
    const company = await getSingleProduct();
    return res.status(200).json(company);
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
}

async function createProductHandler(req, res) {
  const ProductData = req.body;
  try {
    const newProduct = await createProduct(ProductData);
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
}

module.exports = {
  getSingleProductHandler,
  getAllProductsHandler,
  createProductHandler,
};
