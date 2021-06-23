const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const productController = require('../controller/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/Img'));
    },
    filename: (req, file, cb) => {
        const newFileName = 'product-'+Date.now() + path.extname(file.originalname);
        req.body.file = newFileName;
        cb(null, newFileName);
    }
});

const upload = multer({storage: storage});

router.get('/', productController.index);
router.get('/create', productController.create);
router.post('/', upload.single('file'), productController.save);
router.get('/:id/edit', productController.edit);
router.get('/:id/detailProduct', productController.detail);
router.put('/:id', upload.single('file'), productController.update);
router.delete('/:id', productController.remove);

module.exports = router;