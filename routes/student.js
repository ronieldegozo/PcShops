const express = require('express');
const router = express.Router();
const {getStudent, getMenu, getNewProduct, getContactUs} = require('../controller/student');
const { postEmail} = require('../controller/email');


//get student  home page
router.get('/', getStudent);

//register page
router.get('/menu', getMenu);

router.get('/new', getNewProduct);

router.get('/contact', getContactUs);

//email student inquiry
router.post('/email', postEmail);



module.exports = router;
