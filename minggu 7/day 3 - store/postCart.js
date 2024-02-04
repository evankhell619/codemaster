//add cart
app.post("/cart", (req, res) => {
  try {
    const id = cart.length + 1;
    const product = products.find(
      (product) => parseInt(req.body.productId) === product.id
    );

    const totalPrice = product.price * req.body.qty;

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
