const express = require("express");
const { home, about } = require("../controller/registration");
const admin = express.Router();
// controller
const { createStudent, deleteStudent, allStudent, editStudent, searchStudent, login } = require("../controller/adminController");
const authMiddleware = require("../midelware/authMiddleware");
admin.get('',
    // requireSignIn,
    home
);
admin.get('/about',
    about
);
// ============================= logIn admin ======================
admin.post('/login',
    login
);
// ============================= create student ======================
admin.post('/create-student',
    authMiddleware,
    createStudent
);
// ============================= delete  student ======================
admin.delete('/delete-student/:id',
    authMiddleware,
    deleteStudent
);
// ============================= all student information get ======================
admin.get('/all-student',
    authMiddleware,
    allStudent
);
// ============================= update student information  ======================
admin.put('/update-student/:id',
    authMiddleware,
    editStudent
);
// ============================= search student information use student name   ======================
admin.get('/search-studnet/:name',
    authMiddleware,
    searchStudent
);


module.exports = admin;