const express = require('express');
const validate = require('../../middlewares/validate');
const timeValidation = require('../../validations/time.validation');
const timeController = require('../../controllers/time.controller');
const auth = require('../../middlewares/auth');
const upload = require('../../config/multer');

const router = express.Router();

router.post('/', upload.single('time_avatar'), timeController.createTime);
router.get('/', validate(timeValidation.getAllTime), timeController.getAllTime);
router.get('/:time_id', validate(timeValidation.getOneTime), timeController.getOneTime);
router.put('/:time', upload.single('time_avatar'), timeController.updateTime);
router.delete('/:time', timeController.deleteTime);
module.exports = router;
