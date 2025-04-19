const express = require("express")
const router = express.Router()
const controladorCategorias = require("../controllers/controladorCategorias")

// Mostrar lista de categorías
router.get("/", controladorCategorias.obtenerCategorias)

// Crear una nueva categoría (POST)
router.post("/", controladorCategorias.crearCategoria)

// Actualizar una categoría (PUT)
router.put("/:id", controladorCategorias.editarCategoria)

// Eliminar una categoría (DELETE)
router.delete("/:id", controladorCategorias.eliminarCategoria)

module.exports = router
