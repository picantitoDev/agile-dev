const pool = require("./pool")

async function obtenerProductos() {
  const { rows } = await pool.query("SELECT * FROM productos")
  return rows
}

async function crearProducto(nombre) {
  await pool.query("INSERT INTO productos (nombre) VALUES ($1)", [nombre])
}

module.exports = {
  obtenerProductos,
  crearProducto,
}
