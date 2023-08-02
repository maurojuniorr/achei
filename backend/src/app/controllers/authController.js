const express = require('express');
const bycrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig =require('../../config/auth')

const User = require ('../models/User');

const router = express.Router();

function generateToken(params = {}){
    return jwt.sign(params,authConfig.secret, {
        expiresIn:84600,
    });

}
router.post('/register' , async (req,res)=>{
const {email} = req.body;

    try {
        if (await User.findOne({email}));
        return res.send(400).send({error:'user already exists'});

        const user = await User.create(req.body);

        user.password =undefined;
    
        return res.send({
            user,
            token: generateToken({id: user.id}),
        });
    }catch(err){
     return res.status(400).send({error: 'Registration failed'});
    }
});
//
router.post('/authenticate',async(req,res)) ; {}
    const {email, password} = req.body;

    const user = await User.findOne({email}).select('+password');

    if(!user)
     return res.status(400).send({error:'User not found'});

    if(!await bycrpt.compare(password,user.password))
     return res.status(400).send({error:'Invalid password'});
  
    user.password = undefined;

    const token = ({
        user,
        token: generateToken({id: user.id})
    })

    res.send({ user , token});
;

module.exports = app => app.use('/auth'.router);
