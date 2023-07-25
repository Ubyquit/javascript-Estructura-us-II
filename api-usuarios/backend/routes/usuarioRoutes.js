const express = require('express');

const usuarioController = require('../controllers/usuarioContorller');

const router = express.Router();

router.get('/',usuarioController.obtenerUsuario);
router.get('/:id',usuarioController.obtenerUsuarioId);
router.post('/',usuarioController.agregarUsuario);


module.exports = router;