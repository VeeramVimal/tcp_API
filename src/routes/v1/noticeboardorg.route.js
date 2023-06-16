const express = require('express');
const validate = require('../../middlewares/validate');
// const NoticeBoard = require('../../validations/noticeboard.validation');
const noticeboardorgcontroller = require('../../controllers/noticeboardorg.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/',  noticeboardorgcontroller.createnoticeOrg);
router.get('/', noticeboardorgcontroller.getAllnoticeOrg);
router.get('/:id',  noticeboardorgcontroller.getOnenoticeOrg);
router.put('/:id',   noticeboardorgcontroller.updatenoticeOrg);
router.delete('/:id',  noticeboardorgcontroller.deletenoticeOrg);
module.exports = router;
