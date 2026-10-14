
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },

    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        const nombreUnico = Date.now() + '-' + Math.round(Math.random() * 1000);
        cb(null, nombreUnico + extension);
    }
});

const tiposPermitidos = [
    'image/jpeg',
    'image/png',
    'image/webp'
];

const fileFilter = (req, file, cb) => {
    if (tiposPermitidos.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Solo se permiten imágenes JPG, PNG o WEBP'));
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024
    }
});

module.exports = upload;
