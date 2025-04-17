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

async function obtenerProductoPorId(req, res) {
  try {
    const id = parseInt(req.params.id)
    const producto = await db.obtenerProductoPorId(id)

    if (!producto) {
      return res.status(404).send("Producto no encontrado")
    }

    res.render("detalleProducto", {
      producto: producto,
    })
  } catch (error) {
    console.error("Error al obtener producto por ID:", error)
    res.status(500).send("Error al obtener el producto")
  }
}

async function actualizarProducto(req, res) {
  try {
    const id = parseInt(req.params.id)

    const { nombre, stock, precio_unitario, categoria, unidad_medida, estado } =
      req.body

    const datosActualizados = {
      nombre,
      stock: parseInt(stock),
      precio_unitario: parseFloat(precio_unitario),
      categoria,
      unidad_medida,
      estado,
    }

    await db.actualizarProducto(id, datosActualizados)

    res.redirect("/productos")
  } catch (error) {
    console.error("Error al actualizar el producto:", error)
    res.status(500).send("Error al actualizar el producto")
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
  obtenerProductoPorId,
  actualizarProducto,
}
