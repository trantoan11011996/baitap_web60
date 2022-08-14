var express = require('express');
var router = express.Router();
const { registerUser,
    authLogin,
    getUserProfile,
    updateUserProfile,
    getAlluser,
    deleteUser,
    getUserByid } = require('../controller/userController');
const { protect, checkAdmin } = require('../middleware/authTokenMiddleware');

/// đăng kí user

router.post("/", registerUser)

router.post("/login", authLogin)

router.get("/profile", protect, getUserProfile)

router.put("/profile", protect, updateUserProfile)

router.get("/", protect, checkAdmin, getAlluser)

router.delete("/:id", protect, checkAdmin, deleteUser)

router.get("/:id", protect, checkAdmin, getUserByid)
module.exports = router;  
