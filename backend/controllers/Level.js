const db = require('../models');
const { Sequelize,sequelize } = require('../models');

const Op = Sequelize.Op;

const getAllLevels = async(req, res) => {
    const allLevels = await db.Level.findAll();
    res.status(200).send(allLevels)
};

const getLevelById = async (req,res) => {
    const targetId = req.params.id;
    const targetLevel = await db.Level.findOne({ where: { id: targetId} });
    res.status(200).send(targetLevel);
};

const createLevel = async (req,res) => {
    const { name, description, img_logo } = req.body;
    const newLevel = await db.Level.create({
        name: name,
        description: description,
        img_logo: img_logo
    });
    res.status(201).send(newLevel);
};

const updateLevel = async (req, res) => {
    const targetId = req.params.id;
    const { name, description , img_logo } = req.body;
    await db.Level.update({
        name: name,
        description: description,
        img_logo: img_logo
    },{
        where: { id: targetId }
    });

    res.status(200).send({message: `Level ID: ${targetId} has been updated.`});
};

const deleteLevel = async (req, res) => {
    const targetId = req.params.id;
    await db.Level.destroy({
        where: {id: targetId}
    });
    res.status(204).send();
};

module.exports= {
    getAllLevels,
    getLevelById,
    createLevel,
    updateLevel,
    deleteLevel

};