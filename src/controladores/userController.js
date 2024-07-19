import { crearUsuario, obtenerUsuarios, obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario } from '../modelos/userModel.js';


// Crear Usuario
export const manejarCrearUsuario = async (req, res) => {
  const { name, email, role } = req.body;
  const profilePicture = req.savedFilename || null; // Usar el nombre del archivo guardado

  try {
    const userId = await crearUsuario(name, email, role, profilePicture);
    res.status(201).json({ id: userId, name, email, role, profilePicture });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Leer Usuarios
export const manejarObtenerUsuarios = async (req, res) => {
  try {
    const users = await obtenerUsuarios();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar Usuario
export const manejarActualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  const profilePicture = req.savedFilename || req.body.profilePicture || null;

  try {
    const success = await actualizarUsuario(
      id,
      name || null,
      email || null,
      role || null,
      profilePicture || null
    );
    if (success) {
      res.status(200).json({ id, name, email, role, profilePicture });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar Usuario
export const manejarEliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const success = await eliminarUsuario(id);
    if (success) {
      res.status(204).json({ message: 'Usuario eliminado' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};