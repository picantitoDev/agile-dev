const pool = require("./pool")

async function obtenerProductos() {
  const { rows } = await pool.query("SELECT * FROM producto")
  return rows
}

async function crearProducto(
  nombre,
  stock,
  precio_unitario,
  categoria,
  unidad_medida
) {
  await pool.query(
    `INSERT INTO producto 
     (nombre, stock, estado, precio_unitario, categoria, unidad_medida) 
     VALUES ($1, $2, 'Activado', $3, $4, $5)`,
    [nombre, stock, precio_unitario, categoria, unidad_medida]
  )
}

module.exports = {
  obtenerProductos,
  crearProducto,
}
