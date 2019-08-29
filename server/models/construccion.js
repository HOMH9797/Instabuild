const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let construccionSchema = new Schema({
    Type_apartment: {
        type: String,
        required: [true, 'El tipo es necesario']
    },
    apartment_number: {
        type: Number,
        required: [true, 'La referencia es necesario']
    },
    area_mt: {
        type: Number,
        unique: true,
        required: [true, 'El area es necesario']
    },
    price_mt: {
        type: Number,
        required: [true, 'El valor es requerido']
    },
    pricetotal_mt: {
        type: Number
    }
});
module.exports = mongoose.model('Construccion', construccionSchema);