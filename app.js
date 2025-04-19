const express = require("express")
const app = express()
const path = require("path")
const rutaProductos = require("./routes/rutaProductos")
const rutaCategorias = require("./routes/rutaCategorias")
const rutaProveedores = require("./routes/rutaProveedores")

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
const methodOverride = require("method-override")
app.use(methodOverride("_method"))

app.get("/", (req, res) => {
  res.render("index", { title: "Gabriel Roscaza" })
})

app.use("/productos", rutaProductos)
app.use("/categorias", rutaCategorias)
app.use("/proveedores", rutaProveedores)

app.listen(8000, () => {
  console.log("Running on localhost...")
})
