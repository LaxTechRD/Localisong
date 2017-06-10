const express = require("express");
const app = express();

app.use("/static",express.static("public"))

app.set("view engine", "jade")


app.get("/:tipo",function(req,res) {
	var tipo = req.params.tipo;
	 	res.render("index");
	 	console.log("Mapa actual es: "+ tipo)
})
app.get("/",function (req,res) {
	res.render("index")
})

app.get("/:tipo/about",function(req,res) {
	res.render("about")
})

app.get("/:tipo/contact",function(req,res) {
	res.render("contact")
})

app.listen(8080)