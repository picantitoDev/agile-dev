const pool = require("./pool")

async function obtenerCategorias() {
  const { rows } = await pool.query(`SELECT * FROM categoria ORDER BY id ASC`)
  return rows
}

async function crearCategoria(nombre) {
  await pool.query(`INSERT INTO categoria (nombre) VALUES ($1)`, [nombre])
}

async function editarCategoria(id, nombre) {
  await pool.query(`UPDATE categoria SET nombre = $1 WHERE id = $2`, [nombre, id])
}

async function eliminarCategoria(id) {
  await pool.query(`DELETE FROM categoria WHERE id = $1`, [id])
}

module.exports = {
  obtenerCategorias,
  crearCategoria,
  editarCategoria,
  eliminarCategoria,
}
