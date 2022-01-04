
const mongoose = require('mongoose');

const  counterSchema = new mongoose.Schema({
 _id : {
     type: String, 
     required: true
 },
seq : {
    seq: {
        type: Number,
        default: 0
    },
},

})

counterSchema.index({
    _id:1, seq:1
}, { unique: true});

const autoIncrementModeID = function(
    modelName, field, doc, mext, prefix
) {
    counterModel.findByIdAndUpdate(//** Method call begins** modelName, 
        // The ID to find for in counters model
        {
        $inc: { seq:1}
    }, // the update
    {new: true,
    upsert: true},
    // The options
    (error, counter) => { // The callback
        if(error) return next(error);
        const document = 
        doc;
        document[field]
        = prefix + (counter.seq +
            10000000);
            next();
            return true;
    },
    ); // ** Method call ends **
};

module.exports = autoIncrementModeID;