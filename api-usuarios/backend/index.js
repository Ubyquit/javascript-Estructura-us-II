const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();

// middleware
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo!</h1>");
});

app.use("/usuario", usuarioRoutes);

const port = 3001;

app.listen(port, () => {
  console.log(`Servidor API en ejecución por http://localhost:${port}`);
});
