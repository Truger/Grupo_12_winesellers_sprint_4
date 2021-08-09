const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const productController = require('../../controller/api/productAPIController');
const getMulterStorageConfig = require('../../middlewares/multerMiddleware');
let getstorage = getMulterStorageConfig('/Img/product','product');
const upload = multer({storage: getstorage, limits: 1024 * 1024});
const validations = require('../../middlewares/validationsMiddleware');
const authMiddleware = require('../../middlewares/authMiddlewar');



router.get('/', productController.index);

router.get('/last', productController.lastProduct)

router.post('/',
         authMiddleware, 
         upload.single('file'),
         validations.productValidation,
          productController.save
          );
router.get('/:id/edit',
       // authMiddleware,
        productController.edit
        );

router.get('/:id',
         productController.detail
         );
router.put('/:id',
      //  authMiddleware,
      //  upload.single('file'),
      //  validations.productValidation,
        productController.update
        );
router.delete('/:id',
        authMiddleware,
        productController.remove
        );

module.exports = router;