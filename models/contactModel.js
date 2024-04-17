const mongoose = require("mongoose");

const connectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add conatact name."],
    },
    email:{
        type: String,
        required: [true, "Please add email address."],
    },
    phone:{
        type: String,
        required: [true, "Phone number."],
    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Contact", connectSchema);
