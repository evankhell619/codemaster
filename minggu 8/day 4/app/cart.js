import pool from "../config/database.js";

const cart = {
  addToCart: async (product_id, quantity) => {
    const [productExist] = await pool.query(
      "select * from products where id =?",
      [product_id]
    );

    if (productExist.length === 0) {
      throw new Error("Product not found");
    }
    if (productExist[0].in_stock === 0) {
      throw new Error("Product out of stock");
    }
    const total = productExist[0].price * quantity;

    const [productInCart] = await pool.query(
      "select * from cart where product_id = ?",
      [product_id]
    );

    if (!productInCart[0]) {
      await pool.query(
        "insert into cart set product_id = ? ,quantity = ?, total = ?",
        [product_id, quantity, total]
      );
    } else {
      await pool.query(
        "update cart set quantity =?, total =? where product_id = ?",
        [quantity, total, product_id]
      );
    }
  },
  getCart: async () => {
    const query = `select cart.*, products.name, products.price from cart join products on cart.product_id = products.id`;

    const [rows] = await pool.query(query);
    let cartTotal = 0;
    rows.forEach((row) => {
      cartTotal += row.total;
    });
    return {
      cart_total: cartTotal,
      items: rows,
    };
  },
  deleteItem: async (id) => {
    const [cartItem] = await pool.query(" delete from cart where id =?", [id]);

    if (cartItem.affectedRows === 0) {
      throw new Error(" Product not found in cart");
    }
  },
  emptyCart: async () => {
    await pool.query(" delete from cart");
  },
};

export default cart;
