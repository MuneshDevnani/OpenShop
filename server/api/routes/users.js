const express = require('express');
const router = express.Router();
const cors =require('cors');

router.use(cors());

const UserController= require('../controls/user');
const checkAuth = require('../midleware/checkAuth');

router.post('/signup', UserController.user_signup);

router.post('/account', UserController.user_account);

router.post('/logout' , UserController.user_logout);

router.post('/login' , UserController.user_login);

router.post('/contact' , UserController.user_contact);

router.delete("/:userId" , checkAuth, UserController.user_delete);

module.exports = router;