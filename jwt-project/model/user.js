
const mongoose = require("mongoose");

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

module.exports = mongoose.model("user", userSchema);