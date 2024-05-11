const mongoose = require("mongoose");

const connectSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add user name."],
    },
    email:{
        type: String,
        required: [true, "Please add user email address."],
        unique: [true, "email address already taken."],
    },
    phone:{
        type: String,
        required: [true, "Please add user phone number."],
    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);
