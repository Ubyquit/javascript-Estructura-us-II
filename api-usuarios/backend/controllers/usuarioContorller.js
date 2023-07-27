const connection = require("../database");

// Obtener usuarios
const obtenerUsuario = (req, res) => {
  connection.query("SELECT * FROM usuario", (error, result) => {
    if (error) {
      console.error("Error al obtener usuarios", error);
      res.status(500).json({error:"Error al obtener usuarios"});
    }else{
      res.json(result);
    }
  });
};

// Obtener usuarios por id
const obtenerUsuarioId = (req, res) => {
  const id = req.params.id

  connection.query("SELECT * FROM usuario WHERE id_usuario = ?",id, (error, result) => {
    if (error) {
      console.error("Error al obtener usuarios", error);
      res.status(500).json({error:"Error al obtener usuarios"});
    }else{
      res.json(result);
    }
  });
};

// Agregar registro usuario
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
        console.error(`Error al insertar el registro ${error}`);
        res.status(500).json({ error: "Error al insertar el registro." });
      } else {
        res.json({ message: "El usuario se agregó correctamente." });
      }
    }
  );
};


// Eliminar usuarios por id
const eliminarUsuarioId = (req, res) => {
  const id = req.params.id

  connection.query("DELETE FROM usuario WHERE id_usuario = ?",id, (error, result) => {
    if (error) {
      console.error("Error al eliminar usuarios", error);
      res.status(500).json({error:"Error al eliminar usuarios"});
    }else{
      res.json({message:"El usuario ha sido eliminado"});
    }
  });
};


// Actualizar registro usuario
const actualizarUsuarioId = (req, res) => {
  const id = req.params.id
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    email,
    numero_telefonico,
    igsi,
  } = req.body;

  connection.query(
    "UPDATE usuario SET nombre = ?, apellido_paterno = ?, apellido_materno = ?, email = ?, numero_telefonico = ?, igsi = ? WHERE id_usuario = ?",
    [
      nombre,
      apellido_paterno,
      apellido_materno,
      email,
      numero_telefonico,
      igsi,
      id,
    ],
    (error, result) => {
      if (error) {
        console.error(`Error al actualizar el registro ${error}`);
        res.status(500).json({ error: "Error al actualizar el registro." });
      } else {
        res.json({ message: "El usuario se actualizo correctamente." });
      }
    }
  );
};

module.exports = {
  agregarUsuario,
  obtenerUsuario,
  obtenerUsuarioId,
  eliminarUsuarioId,
  actualizarUsuarioId,
};
