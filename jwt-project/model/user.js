
const mongoose = require("mongoose");
const autoIncrementModeID = require("./counter");
const autoIncrementModelID = require('./Counter.model');

const userSchema = new mongoose.Schema({
    userID: {
        type: String,
      },
      fullName: {
        type: String,
        default: null,
      },
      email: {
        type: String,
        lowercase: true,
        unique: [true, 'User with email already exists'],
      },
      phone: {
        type: String,
      },
      password: {
        type: String,
      },
      token: {
          type: String,
      }

});
userSchema.pre('save', function(next){
  if(!this.isNew){
    next();
    return;
  }
  autoIncrementModeID('applicationCount', 'userID', this, next, 'USER')
});

module.exports = mongoose.model("user", userSchema);