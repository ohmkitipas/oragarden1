const db = require('../models');
const { Sequelize,sequelize } = require('../models');

const Op = Sequelize.Op;

const getAllProducts = async(req, res) => {
    const allProducts = await db.Product.findAll();
    res.status(200).send(allProducts)
};

const getProductById = async (req,res) => {
    const targetId = req.params.id;
    const targetProduct = await db.Product.findOne({ where: { id: targetId} });
    res.status(200).send(targetProduct);
};

const createProduct = async (req,res) => {
    const { name, detail, Price, img1, img2, img3, img4, img5 } = req.body;
    const newProduct = await db.Product.create({
        name: name,
        detail: detail,
        Price: Price,
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5
    });
    res.status(201).send(newProduct);
};

const updateProduct = async (req, res) => {
    const targetId = req.params.id;
    const { name, detail ,Price , img1, img2, img3, img4, img5 } = req.body;
    await db.Product.update({
        name: name,
        detail: detail,
        Price: Price,
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5
    },{
        where: { id: targetId }
    });

    res.status(200).send({message: `Product ID: ${targetId} has been updated.`});
};

const deleteProduct = async (req, res) => {
    const targetId = req.params.id;
    await db.Product.destroy({
        where: {id: targetId}
    });
    res.status(204).send();
};

module.exports= {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct

};