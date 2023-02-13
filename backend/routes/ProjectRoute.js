const express = require('express');
const multer = require('multer');
const path = require('path');
const { verifyToken } = require('../middleware/VerifiyToken.js');

const {
    Create,
    FindAll,
    getPhotoImage,
    Delete,
    getById,
    GetAll,
    Update
  } = require('../controllers/ProjectController.js');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.fileName + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post('/v1/api/projects',verifyToken , upload.single('image'), Create);
router.get('/v1/api/projects/management',verifyToken, FindAll);
router.get('/v1/api/projects/landing', GetAll);
router.get('/v1/api/projects/photoImage/:path', getPhotoImage);
router.delete('/v1/api/projects/:id',verifyToken, Delete);
router.patch('/v1/api/projects/:id',verifyToken, Update);
router.get('/v1/api/projects/:id',verifyToken, getById);

module.exports = router;