const db = require("../model/queriesProductos")

async function obtenerProductos(req, res) {
  try {
    const productos = await db.obtenerProductos()
    const nombreDeProductos = productos.map((producto) => producto.nombre)

    res.render("productos", {
      productos: nombreDeProductos,
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
  const { nombre } = req.body
  await db.crearProducto(nombre)
  res.redirect("/productos")
}

module.exports = {
  obtenerProductos,
  crearProductoGet,
  crearProductoPost,
}
