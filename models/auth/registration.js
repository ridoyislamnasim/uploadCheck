// username ,useremail,password,confirmpassword

const mongoose = require("mongoose");
const Schema = mongoose.Schema
const registrationSchema = new Schema(
    {
        name: {
            type: Number,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            minlength: 5,
            maxlength: 15,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            minlength: 5,
            maxlength: 35,
            required: true,
        },
        favoriteSports: {
            type: String,
            maxlength: 35,

        },
        category: {
            type: mongoose.ObjectId,
            ref: 'categoryInfo',
        },
    },
    {
        timestamps: true,
    }
);
// databaseTable name , schema name 
const registrationschema = mongoose.model("registrationInfo", registrationSchema);

module.exports = registrationschema;