const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
productSchema.statics.getProducts = async function () {
  const products = await Product.find({});
  console.log(products)
  return products
}
const Product = mongoose.model("Productsss", productSchema);

module.exports = Product;
