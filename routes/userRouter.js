const express = require('express');
const path = require('path');
const router = express.Router();
const userController = require('../controller/userController');
const multer = require('multer');
const validations = require('../middlewares/validationsMiddleware')
const getMulterStorageConfig = require('../middlewares/multerMiddleware');
const storage = getMulterStorageConfig(('../public/Img/user','user'));
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddlewar');

const upload = multer({storage: storage});

router.get('/login', guestMiddleware, userController.login);
router.post('/loguear', validations.validetUserLogin, userController.loguear);
router.get('/logout', userController.logout); 
router.get('/register', guestMiddleware, userController.register);

router.post('/register', upload.single('file'), userController.create);


module.exports = router;