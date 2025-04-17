const express = require("express")
const app = express()
const path = require("path")
const rutaProductos = require("./routes/rutaProductos")

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
const methodOverride = require("method-override")
app.use(methodOverride("_method"))

app.get("/", (req, res) => {
  res.render("index", { title: "Gabriel Roscaza" })
})

app.use("/productos", rutaProductos)

app.listen(8080, () => {
  console.log("Running on localhost...")
})
