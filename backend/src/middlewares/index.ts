import { Request, Response, NextFunction } from "express"
import * as jwt from "jsonwebtoken"

const local: (req: Request, res: Response, next: NextFunction) => void = (req, res, next) => {
    if (!req.headers.authorization) {
        next()
    }
}

const requireSignIn: (req: Request, res: Response, next: NextFunction) => any = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, 'afcfa6c15601078179174b6b5dfded8ed101aee14bf65922baa614a553e73ba86b1bd5e7d6a64cb97814045652a74ecb9ff31139a1fa09028cca7c271b1ae6c7')
        req.user = user;
    }
    else {
        return res.status(400).json({ message: "Authorization required" });
    }
    next();
}

const userMiddleware: (req: Request, res: Response, next: NextFunction) => void = (req, res, next) => {
    if (req.user?.role !== "user") {
        return res.status(400).json({ message: "User Access Denied" })
    }
    next();
}

export { requireSignIn, userMiddleware, local };