// external imports
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


const admin = require("./router/adminRouter");

// middleWare 

const app = express();
// set view engine
app.set("views", "./views");
app.set("view engine", "ejs");

// database connection
mongoose
    .connect('mongodb+srv://ridoyislamnasim:59m2Md5nJtmKKdNw@cluster0.dqyagb9.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("database connection successful! ------------------------------------------------------------------------------"))
    .catch((err) => console.log(err));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
// app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", admin);

// 404 not found handler
// app.use(notFoundHandler);

// common error handler
// app.use(errorHandler);

app.listen(3000, () => {
    console.log(`app listening to port 3000`);
});