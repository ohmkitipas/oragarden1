require('dotenv').config();

const express = require('express');
const db = require('./models');
const app = express();
const cors = require('cors');
const categoryRoutes = require('./routes/Category');
const levelRoutes = require('./routes/Level');
const orderRoutes = require('./routes/Order');
const orderListRoutes = require('./routes/OrderList');
const productRoutes = require('./routes/Product');
const userRoutes = require('./routes/User');
const waterLevelRoutes = require('./routes/WaterLevel');

require('./config/passport/passport');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/categories', categoryRoutes );
app.use('/levels', levelRoutes);
app.use('/orders', orderRoutes);
app.use('/orderLists', orderListRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/waterLevels', waterLevelRoutes);


db.sequelize.sync({force: false }).then(() => {
   app.listen(8000, () => {
       console.log("Server is Running at port 8000");
    });
});