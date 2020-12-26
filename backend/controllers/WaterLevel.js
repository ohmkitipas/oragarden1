const db = require('../models');
const { Sequelize,sequelize } = require('../models');

const Op = Sequelize.Op;

const getAllWaterLevels = async(req, res) => {
    const allWaterLevels = await db.WaterLevel.findAll();
    res.status(200).send(allWaterLevels)
};

const getWaterLevelById = async (req,res) => {
    const targetId = req.params.id;
    const targetWaterLevel = await db.WaterLevel.findOne({ where: { id: targetId} });
    res.status(200).send(targetWaterLevel);
};

const createWaterLevel = async (req,res) => {
    const { name, description, img_logo } = req.body;
    const newWaterLevel = await db.WaterLevel.create({
        name: name,
        description: description,
        img_logo: img_logo
    });
    res.status(201).send(newWaterLevel);
};

const updateWaterLevel = async (req, res) => {
    const targetId = req.params.id;
    const { name, description , img_logo } = req.body;
    await db.WaterLevel.update({
        name: name,
        description: description,
        img_logo: img_logo
    },{
        where: { id: targetId }
    });

    res.status(200).send({message: `WaterLevel ID: ${targetId} has been updated.`});
};

const deleteWaterLevel = async (req, res) => {
    const targetId = req.params.id;
    await db.WaterLevel.destroy({
        where: {id: targetId}
    });
    res.status(204).send();
};

module.exports= {
    getAllWaterLevels,
    getWaterLevelById,
    createWaterLevel,
    updateWaterLevel,
    deleteWaterLevel

};