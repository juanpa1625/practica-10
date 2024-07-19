import express from 'express';
import { manejarCrearUsuario, manejarObtenerUsuarios, manejarActualizarUsuario, manejarEliminarUsuario } from '../controladores/userController.js';
import upload from '../config/multerConfig.js';

const router = express.Router();

router.post('/users', upload.single('profilePicture'), manejarCrearUsuario);
router.get('/users', manejarObtenerUsuarios);
router.put('/users/:id', upload.single('profilePicture'), manejarActualizarUsuario);
router.delete('/users/:id', manejarEliminarUsuario);

export default router;