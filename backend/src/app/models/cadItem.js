const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');s

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },	
    model:{
        type: String,
        require: true,  
        lowercase: true
    },
    category:{
        type:String,
        require: true,
    },
    serialNumber:{
        type: String,
        unique: true
    }, 
    brand:{
        type: String,
        require: true,
        select: false
    }, 
    wereFounded:{
        type: String,
        require: true

    },
    foundAt:{
        type: Date,
        require: true,
    },
    returned:{
        type: Boolean,
        require: true,
        default: false
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;


