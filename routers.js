const express = require('express');
//llamar a handlers del api
const usuarioHandler = require('./app/handlers/usuario.handler');
//variable para encapsular rutas
const router = express.Router();
//reguistrar las rutas 
//rutas de paciente
router.get('/usuarios', usuarioHandler.listUsuario) //listado de pacientes SIN PARENTESISAL FINAL listPAciente
router.post('/usuarios', usuarioHandler.insertUsuario) // insertamos pacientes
router.patch('/usuarios/:id', usuarioHandler.updateUsuario) // actualizar pacientes
router.delete('/usuarios/:id', usuarioHandler.deleteUsuario) // eliminar pacientesS
//exporto los router (INCLUIDO EL 25 DE JUNIO para que funcione por el terminal NODE INDEX.JS)
module.exports = router;