const express = require('express');

const usuarioController = require('../controllers/usuarioContorller');

const router = express.Router();

router.get('/',usuarioController.obtenerUsuario);
router.get('/:id',usuarioController.obtenerUsuarioId);
router.post('/',usuarioController.agregarUsuario);
router.delete('/:id',usuarioController.eliminarUsuarioId);
router.put('/:id',usuarioController.actualizarUsuarioId);



module.exports = router;