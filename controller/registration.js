const express = require("express");

home = async (req, res) => {
    console.log("req.body")
    res.json("this is home ")

}
about = async (req, res) => {
    console.log("req.body")
    res.json("this is about ")

}
module.exports = {
    home,
    about
};