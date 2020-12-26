const db = require('../models');
const { Sequelize,sequelize } = require('../models');

const Op = Sequelize.Op;

const getAllCategories = async(req, res) => {
    const allCategories = await db.Category.findAll();
    res.status(200).send(allCategories)
};

const getCategoryById = async (req,res) => {
    const targetId = req.params.id;
    const targetCategory = await db.Category.findOne({ where: { id: targetId} });
    res.status(200).send(targetCategory);
};

const createCategory = async (req,res) => {
    const { name, description, img_logo } = req.body;
    const newCategory = await db.Category.create({
        name: name,
        description: description,
        img_logo: img_logo
    });
    res.status(201).send(newCategory);
};

const updateCategory = async (req, res) => {
    const targetId = req.params.id;
    const { name, description , img_logo } = req.body;
    await db.Category.update({
        name: name,
        description: description,
        img_logo: img_logo
    },{
        where: { id: targetId }
    });

    res.status(200).send({message: `Category ID: ${targetId} has been updated.`});
};

const deleteCategory = async (req, res) => {
    const targetId = req.params.id;
    await db.Category.destroy({
        where: {id: targetId}
    });
    res.status(204).send();
};

module.exports= {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory

};