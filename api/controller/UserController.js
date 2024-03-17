import UserModel from "../model/Users.js";
import bcrypt from 'bcrypt';

export const getUsers = async(req, res) => {
    try {
        const users = await UserModel.findAll({
            attributes:['uuid','username','password']
        });
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { username, password } = req.body;
     // Generate salt
     const saltRounds = 10;
     const salt = await bcrypt.genSalt(saltRounds);

     // Hash the password
     const hashpass = await bcrypt.hash(password, salt);
    try {
        await UserModel.create({
            username: username,
            password: hashpass
        });
        
        res.status(201).json({msg: "Register Berhasil",username,hashpass});
    } catch (error) {
        console.log(error);
    }
}

export const Login = async(req, res) => {
    try {
        const user = await UserModel.findOne({
            where: {
                username: req.body.username
            }
        });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.status(400).json({ msg: "Wrong password" });
        }
        const userId = user.uuid;
        const username = user.username;
        res.status(200).json({msg: "Login Succes", userId, username });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ msg: "Login server error" });
    }}
