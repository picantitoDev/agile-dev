const pool = require("./pool")

async function obtenerProductos() {
  const { rows } = await pool.query(
    "SELECT * FROM producto ORDER BY nombre ASC"
  )
  return rows
}

async function obtenerProductoPorId(id) {
  const { rows } = await pool.query("SELECT * FROM producto WHERE id = $1", [
    id,
  ])
  return rows[0]
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

async function actualizarProducto(id, producto) {
  const query = `
    UPDATE producto
    SET nombre = $1,
        stock = $2,
        precio_unitario = $3,
        categoria = $4,
        unidad_medida = $5,
        estado = $6
    WHERE id = $7
  `

  const valores = [
    producto.nombre,
    producto.stock,
    producto.precio_unitario,
    producto.categoria,
    producto.unidad_medida,
    producto.estado,
    id,
  ]

  await pool.query(query, valores)
}

module.exports = {
  obtenerProductos,
  crearProducto,
  obtenerProductoPorId,
  actualizarProducto,
}
