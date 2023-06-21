// LLamadas de Librerias
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 8080;

const publico = path.resolve(__dirname, "./public");
app.use(express.static(publico));


app.listen(port, () => console.log("Corriendo servidor"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/home.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/register.html"));
});
