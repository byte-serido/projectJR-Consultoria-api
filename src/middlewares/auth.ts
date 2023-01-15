import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth.json');

module.exports = (req:Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({error:"No token provided"});
    
    //Formato que esperamos do token: Bearer vvsajnajnjanjnfjsnfj

    const parts = authHeader.split(' ');

    //verificando se tenho duas partes 

    if(parts.length === 2){
        // Como transformei parts em um array, 
        // posso destruturar e colocar cada parte em uma variavel, que no caso aqui é scheme e token!
        const [scheme, token] = parts;

        //regex
        if(!/^Bearer$/i.test(scheme))
            return res.status(401).send({error:'Token malformatted'});
        
        jwt.verify(token, authConfig.secret, (err:any,decoded:any) => {
            if (err) return res.status(401).send({error:"Token Invalid"});

            req.userId = decoded.id;
            return next();
        })
    }else{
        return res.status(401).send({error:"Token error"});
    }
        
}   