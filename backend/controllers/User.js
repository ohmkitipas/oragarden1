const {sequelize, Sequelize} = require('../models');
const db = require('../models');
const bcryptjs = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
    const allUsers = await db.User.findAll();
    res.status(200).send(allUsers);
};

const getUserById = async(req, res) => {
    const targetId = req.params.id;
    const targetUser = await db.User.findOne({ where: { id: targetId} });
    res.status(200).send(targetUser);

};

const registerUser = async (req, res) => {
    const { name, lastName, tell, address, email, permit } = req.body;
    const targetUser = await db.User.findOne({ where: { email: email } });
    if (targetUser) {
        res.status(400).send({ message: " Email already taken." });
    } else {
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(passport, salt);

        await db.User.create({
            email: email,
            password: hashedPassword,
            name: name,
            lastName: lastName,
            tell: tell,
            address: address,
            permit: permit
        });
        res.status(201).send({ message: "User created"});
    }
};

const loginUser = (req, res) => {
    const { email, password } = req.body;
    const targetUser = await db.User.findOne({ where: {email :email } });
    if (!targetUser) {
        res.status(400).send({ message: " Email or password is wrong." });
    } else {
        const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password);
        if(isCorrectPassword){
           const payload = {
               name: targetUser.name,
               id: targetUser.id,
           };
           const token = jwt.sign(payload, "OHmHo", {expiresIn: 3600 });

           res.status(200).send({
               token: token,
               message: " Login successful."
           });
        } else{
            res.status(400).send({ message: " Email or password is wrong." });
        }
    }
    
};


const updateUser = async (req,res) => {
    const targetId = req.params.id;
    const { name, lastName, tell, address, email, permit } = req.body;
    await db.User.update({
        name: name,
        lastName: lastName,
        tell: tell,
        address: address,
        email: email,
        permit: permit
    },{
        where: { id: targetId}
    });
    res.status(200).send({message: `User ID: ${targetId} has been updated` });

};

const deleteUser = async (req,res) => {
    const targetId = req.params.id;
    await db.User.destroy({
        where: {id: targetId}
    });
    res.status(204).send();
}


module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    loginUser,
    updateUser,
    deleteUser
}