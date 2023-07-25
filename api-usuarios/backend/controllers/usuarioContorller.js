const connection = require("../database");

const agregarUsuario = (req, res) => {
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    email,
    numero_telefonico,
    igsi,
   } = req.body;

  connection.query(
    "INSERT INTO usuario (nombre, apellido_paterno, apellido_materno, email, numero_telefonico, igsi) VALUES (?,?,?,?,?,?)",
    [
      nombre,
      apellido_paterno,
      apellido_materno,
      email,
      numero_telefonico,
      igsi,
    ],
    (error, result) => {
      if (error) {
        console.error(`Error al insertar el registro ${eroor}`);
        res.status(500).json({
          error: "Error al insertar el registro",
        });
      } else {
        res.json({
          message: "El usuario se agregó correctamente.",
        });
      }
    }
  );
};

