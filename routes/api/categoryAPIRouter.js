const express = require('express');
const path = require('path');
const router = express.Router();
const categoryController = require('../../controller/api/categoryAPIController');
const multer = require('multer');
const validations = require('../../middlewares/validationsMiddleware')
const getMulterStorageConfig = require('../../middlewares/multerMiddleware');
const storage = getMulterStorageConfig(('/Img/category','category'));
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddlewar');

const upload = multer({storage: storage});

router.get('/', 
        guestMiddleware, 
        categoryController.index
        );

module.exports = router;        