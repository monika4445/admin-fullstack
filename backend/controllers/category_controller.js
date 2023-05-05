const { Category } = require(".");

function allCategories(req, res) {
  Category.findAll()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function getCategory(req, res) {
  const { id } = req.params;
  Category.findOne({ where: { id } })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function createCategory(req, res) {
  const { name } = req.body;
  Category.create({ name })
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function updateCategory(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  Category.update({ name }, { where: { id } })
    .then((category) => {
      res.json({ response: "updated" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function deleteCategory(req, res) {
  const { id } = req.params;
  Category.destroy({ where: { id } })
    .then((category) => {
      res.json({ response: "deleted" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

module.exports = {
  allCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
