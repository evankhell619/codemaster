import express from "express";
import products from "./products.js";
import cart from "./cart.js";

const app = express();
const port = 3030;

app.use(express.json());

app.get("/", (req, res) => {
  const responseData = {
    message: "Welcome to store ",
    products: products,
  };
  res.json(responseData);
});

app.get("/order", (req, res) => {
  res.json({ message: "Welcome to Order" });
});

//! CART

//add cart
app.post("/cart", (req, res) => {
  try {
    const id = cart.length + 1;
    const product = products.find(
      (product) => parseInt(req.body.productId) === product.id
    );

    const totalPrice = products.price * req.body.qty;

    const createProduct = {
      id: id,
      quantity: req.body.qty,
      productId: req.body.productId,
      product: product,
      total: totalPrice,
    };

    cart.push(createProduct);

    return res.json({
      data: createProduct,
    });
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
});

// cart search
app.get("/cart/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const seacrhCart = cart.find((cart) => id === cart.id);

    if (!seacrhCart) {
      return res.json({
        message: "Item not found",
      });
    }

    return res.json({
      data: seacrhCart,
    });
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
}),
  // ! PRODUCTT

  //search product
  app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((product) => product.id === id);

    if (typeof product === "undefined") {
      res.status(404).json({ message: "product not found" });
    } else {
      res.json(product);
    }
  });

//add product
app.post("/products", (req, res) => {
  const newProd = req.body;
  products.push(newProd);
  res.end(JSON.stringify(products));
});

// update product
app.put("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1) {
    res.status(404).json({ message: "product not found" });
  }
  products[productIndex] = {
    id: productId,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  };
  products[productIndex] = Object.assign(products[productIndex], req.body);

  res.json({ message: "product updated", data: products[productIndex] });
});
// delete product
app.delete("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1) {
    res.status(404).json({ message: "product not found" });
  }

  products.splice(productIndex, 1);

  res.json({
    msg: "product deleted",
    data: products,
  });
});

// ! ORDER

// * PORT
app.listen(port, () => {
  console.log(`🚀 listen on ${port}`);
});
