const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const productController = require('../controller/productController');
const getMulterStorageConfig = require('../middlewares/multerMiddleware');
let getstorage = getMulterStorageConfig('../public/Img/product','product');
const upload = multer({storage: getstorage, limits: 1024 * 1024});
const validations = require('../middlewares/validationsMiddleware')
const authMiddleware = require('../middlewares/authMiddlewar')



router.get('/', productController.index);

router.get('/index', productController.index2);

router.get('/create',
        authMiddleware, 
        productController.create
        );
router.post('/',
         authMiddleware, 
         upload.single('file'),
         validations.productValidation,
          productController.save
          );
router.get('/:id/edit',
        authMiddleware,
        productController.edit
        );
router.get('/:id',
         productController.detail
         );
router.put('/:id',
        authMiddleware,
        upload.single('file'),
        validations.productValidation,
        productController.update
        );
router.delete('/:id',
        authMiddleware,
        productController.remove
        );

module.exports = router;