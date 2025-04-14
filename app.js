const express = require("express")
const app = express()
const path = require("path")
const productRoutes = require("./routes/productRoutes")

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index", { title: "Gabriel Roscaza" })
})

app.use("/products", productRoutes)

app.listen(8080, () => {
  console.log("Running on localhost...")
})
