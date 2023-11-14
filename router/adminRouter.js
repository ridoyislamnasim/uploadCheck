const express = require("express");
const { home, about } = require("../controller/registration");
const admin = express.Router();

admin.get('/',
    // requireSignIn,
    home
);
admin.get('/about',
    about
);


module.exports = admin;