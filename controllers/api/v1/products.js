const Product = require("../../../models/products_schema");

module.exports.getProducts = async function (req, res) {
  try {
    let products = await Product.find({});

    return res.json(200, {
      message: "List of products",
      products: products,
    });
  } catch (error) {
    console.log(error);
    return res.json(500, {
      message: "Failed to get products",
    });
  }
};

module.exports.addProduct = async function (req, res) {
  try {
    let product = await Product.create(req.query);

    return res.json(200, {
      message: "Product added",
      product: product,
    });
  } catch (error) {
    console.log(error);
    return res.json(500, {
      message: "Failed to create product",
    });
  }
};

module.exports.deleteProduct = async function (req, res){
  try {
    let product = await Product.findByIdAndDelete(req.params.id);

    return res.json(200, {
      message: "Product deleted successfully",
      product: product
    });
  } catch (error) {
    console.log(error);
    return res.json(500, {
      message: "Failed to delete product",
    });
  }
}

module.exports.updateProduct = async function (req, res){
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, {quantity: req.query.number});

    return res.json(200, {
      message: "Product updated successfully",     
    })
  } catch (error) {
    console.log(error);
    return res.json(500, {
      message: "Failed to update product",
    });
  }
}
