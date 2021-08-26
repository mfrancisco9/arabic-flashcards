const db = require('../models');

module.exports = {
    findAllCards: (req, res) => {
        db.Card.find({}).then(cardData => res.json(cardData))
    }
        
}