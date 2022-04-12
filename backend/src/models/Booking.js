const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date : String,
    approved : Boolean,
    user: {                     // Referencia do usuario que criou o Booking
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {                      
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});


module.exports = mongoose.model('Booking', BookingSchema);

