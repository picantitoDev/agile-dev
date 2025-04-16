const db = require("../model/queriesProductos")

async function obtenerProductos(req, res) {
  try {
    const productos = await db.obtenerProductos()
    console.log("Productos que se pasan a la vista:", productos)

    res.render("productos", {
      productos: productos,
    })
  } catch (error) {
    console.error("Error al obtener productos:", error)
    res.status(500).send("Error al obtener los productos")
  }
}

async function crearProductoGet(req, res) {
  // render the form
  res.render("nuevoProducto", { title: "New User" })
}

async function crearProductoPost(req, res) {
  const { nombre, stock, precio_unitario, categoria, unidad_medida } = req.body
  console.log(req.body)
  await db.crearProducto(
    nombre,
    stock,
    precio_unitario,
    categoria,
    unidad_medida
  )
  res.redirect("/productos")
}

module.exports = {
  obtenerProductos,
  crearProductoGet,
  crearProductoPost,
}
