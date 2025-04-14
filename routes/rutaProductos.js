const express = require("express")
const router = express.Router()
const controladorProductos = require("../controllers/controladorProductos")

router.get("/", controladorProductos.obtenerProductos)

module.exports = router
