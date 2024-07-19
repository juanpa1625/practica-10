import { pool } from "../database/db.js";


export const crearUsuario = async (name, email, role, profilePicture) => {
  const sql = 'INSERT INTO usuarios (name, email, role, profile_picture) VALUES (?, ?, ?, ?)';
  const [result] = await pool.execute(sql, [name, email, role, profilePicture]);
  return result.insertId;
};

export const obtenerUsuarios = async () => {
  const sql = 'SELECT * FROM usuarios';
  const [rows] = await pool.execute(sql);
  return rows;
};

export const obtenerUsuarioPorId = async (id) => {
  const sql = 'SELECT * FROM usuarios WHERE id = ?';
  const [rows] = await pool.execute(sql, [id]);
  return rows[0];
};

export const actualizarUsuario = async (id, name, email, role, profilePicture) => {
  const sql = 'UPDATE usuarios SET name = ?, email = ?, role = ?, profile_picture = ? WHERE id = ?';
  const [result] = await pool.execute(sql, [name, email, role, profilePicture, id]);
  return result.affectedRows > 0;
};

export const eliminarUsuario = async (id) => {
  const sql = 'DELETE FROM usuarios WHERE id = ?';
  const [result] = await pool.execute(sql, [id]);
  return result.affectedRows > 0;
}