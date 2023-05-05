const { Product, Category } = require(".");

function allProducts(req, res) {
  Product.findAll({ include: Category })
    .then((prod) => {
      res.json(prod);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function getProduct(req, res) {
  const { id } = req.params;
  Product.findOne({ where: { id }, include: Category })
    .then((prod) => {
      res.json(prod);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function createProduct(req, res) {
  const { name, image, categoryId, price, description, quantity } = req.body;
  Product.create({ name, image, categoryId, price, description, quantity })
    .then((prod) => {
      res.status(201).json(prod);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function updateProduct(req, res) {
  const { id } = req.params;
  const { name, image, categoryId, price, description, quantity } = req.body;
  Product.update(
    { name, image, categoryId, price, description, quantity },
    { where: { id } }
  )
    .then((prod) => {
      res.json({ response: "updated" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function deleteProduct(req, res) {
  const { id } = req.params;
  Product.destroy({ where: { id } })
    .then((prod) => {
      res.json({ response: "deleted" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

module.exports = {
  allProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
