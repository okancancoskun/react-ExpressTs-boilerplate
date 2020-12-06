import { Request, Response } from "express"
import { User } from "../models"
import * as jwt from "jsonwebtoken";
import bcrypt = require("bcrypt");
export class AuthController {

    static async PostRegister(req: Request, res: Response): Promise<void> {
        try {
            const password = req.body.password;
            const email = req.body.email;
            const user = await User.findOne({ email: email })
            const hashedPass = await bcrypt.hash(password,4);
            if (user) {
                await res.status(400).json({ message: "User already registered" });
            }
            else {
                const newUser = new User({
                    email: email,
                    password: hashedPass
                })
                await newUser.save();
                res.status(201).json(newUser);
            }
        } catch (error) {
            res.status(400).json(error);
        }
    }
    static async PostLogin(req: Request, res: Response): Promise<any> {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await User.findOne({ email: email });
            if (!user) {
                res.status(400).json({ message: 'You should create an account' });
            }
            else {
                const isSuccess = await bcrypt.compare(password, user.password)
                const {_id,email,role} = user;
                if (isSuccess) {
                    const token = await jwt.sign({_id:user._id,email:user.email,role:role},'afcfa6c15601078179174b6b5dfded8ed101aee14bf65922baa614a553e73ba86b1bd5e7d6a64cb97814045652a74ecb9ff31139a1fa09028cca7c271b1ae6c7',{expiresIn:'1d'}) //require('crypto').randomBytes(64).toString('hex')
                    res.status(200).json({token,user:{_id,email,role}})   
                } else {
                    res.status(400).json("You could not Auth")
                }
            }
        } catch (error) {
            res.status(400).json(error)
        }
    }

}
