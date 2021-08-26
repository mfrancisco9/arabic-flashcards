require("dotenv").config();
const sequelize = require("../config/connection");

const { Card } = require("../models");

const cardData = require("./cardData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const cards = await Card.bulkCreate(cardData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();