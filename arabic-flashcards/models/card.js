const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {};

Card.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                allowNull: false
            }
        },
        en: {
            type: DataTypes.STRING,
            trim: true

        },
        ar: {
            type: DataTypes.STRING,
            trim: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'card'
    }
)

module.exports = Card;