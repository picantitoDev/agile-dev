const pool = require("../model/db")

// GET all products
getAllProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products")
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// POST a new product
createProduct = async (req, res) => {
  const { name, price } = req.body
  try {
    const result = await pool.query(
      "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *",
      [name, price]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllProducts,
  createProduct,
}
