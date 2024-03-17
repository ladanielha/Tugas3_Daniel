import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/config.js";
import router from "./routes/UsersRoute.js";
import UserModel from "./model/Users.js";

dotenv.config();
const app = express();

try {
    await db.authenticate();
    await UserModel.sync();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ origin: true }));
app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server running at port 5000'));