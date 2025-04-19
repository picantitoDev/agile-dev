const dbCategorias = require("../model/queriesCategorias")
const { successResponse } = require("../utils/standard-response")

async function obtenerCategorias(req, res) {
  try {
    const categorias = await dbCategorias.obtenerCategorias()
    res.render("categorias", { categorias })
  } catch (error) {
    console.error("Error al obtener categorias:", error)
    res.status(500).send("Error al obtener las categorias")
  }
}

async function crearCategoria(req, res) {
  const { nombre } = req.body
  try {
    await dbCategorias.crearCategoria(nombre)
    res.redirect("/categorias")
  } catch (error) {
    console.error("Error al crear categoría:", error)
    res.status(500).send("Error al crear la categoría")
  }
}

async function editarCategoria(req, res) {
  const { id } = req.params
  const { nombre } = req.body
  try {
    await dbCategorias.editarCategoria(id, nombre)
    res.status(200).send(successResponse({ message: "Categoría editada correctamente" }))
  } catch (error) {
    console.error("Error al editar categoría:", error)
    res.status(500).send("Error al editar la categoría")
  }
}

async function eliminarCategoria(req, res) {
  const { id } = req.params
  try {
    await dbCategorias.eliminarCategoria(id)
    res.status(200).send(successResponse({ message: "Categoría eliminada correctamente" }))
  } catch (error) {
    console.error("Error al eliminar categoría:", error)
    res.status(500).send("Error al eliminar la categoría")
  }
}

module.exports = {
  obtenerCategorias,
  crearCategoria,
  editarCategoria,
  eliminarCategoria,
}
