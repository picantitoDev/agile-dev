const express = require("express")
const router = express.Router()
const controladorProductos = require("../controllers/controladorProductos")

router.get("/", controladorProductos.obtenerProductos)
router.get("/crear-producto", (req, res) => {
  res.render("nuevoProducto")
})

router.post("/crear-producto", controladorProductos.crearProductoPost)

module.exports = router
