const router = require('express').Router();
const { Card } = require('../../../models');
const sequelize = require('sequelize');


// get all cards 
router.get("/", async (req, res) => {
    try {
        const cardData = await Card.findAll();
        res.status(200).json(cardData);
    } catch (err) {
        res.status(500).json(err)
    }
})