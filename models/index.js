// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// A reader can have many books
Category.hasMany(Product, {
  foreignKey: 'categoryId',
});

// A book belongs to a single reader
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
});

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },

});

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },

});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
