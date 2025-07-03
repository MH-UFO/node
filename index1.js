import express from "express";
import superheroes from "superheroes";


const app = express();
const port = 3000;


app.get("/", (req, res) => {
  let name = superheroes.random();
  res.send(`<h1>Behold, I am ${name}!</h1>`);
});

app.get("/bmw", (req, res) => {
  res.sendFile("/public/index.html")
})

app.get("/benz", (req, res) => {
  res.sendFile("/public/index.html")
})

app.get("/Audi", (req, res) => {
  res.sendFile("/public/index.html")
})
app.get("/Doge", (req, res) => {
  res.sendFile("/public/index.html")
})
app.get("/Ferari", (req, res) => {
  res.sendFile("/public/index.html")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
