import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './rutas/userRoutes.js';
import { PORT } from "./config/ServerConfig.js";

dotenv.config();

console.log('DB_HOST:', process.env.BD_HOST);
console.log('DB_USER:', process.env.BD_USER);






const app = express();

app.use(express.json());
app.use('/uploads', express.static('src/uploads'));

app.use('/api', userRoutes);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});