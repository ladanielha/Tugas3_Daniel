import  express  from "express";
import { Login,  Register, getUsers } from "../controller/UserController.js";

const router = express.Router();

router.post('/users', Register)
router.post('/login', Login)
router.get('/users',  getUsers)

export default router;

