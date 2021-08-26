const router = require('express').Router();
const { Card } = require('../../models');
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

// get one card by id 
router.get("/:id", async (req, res) => {
    try {
      const cardData = await Card.findByPk(req.params.id);
  
      if (!cardData) {
        res.status(404).json({ message: "No card found with this id!" });
        return;
      }
  
      res.status(200).json(cardData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // create a card

  router.post("/newcard", async (req, res) => {
    console.log('show create route hit')
    try {
      const cardData = await Card.create(req.body);
  
      console.log("card create hit: ", cardData)
  
      res.status(200).json(cardData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;