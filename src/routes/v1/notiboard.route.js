const express = require('express');
const validate = require('../../middlewares/validate');
const NoticeBoard = require('../../validations/noticeboard.validation');
const noticeboardController = require('../../controllers/noticeboard.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/',auth('manageUsers'), validate(NoticeBoard.createNotice), noticeboardController.createnotice);
router.get('/', auth('manageUsers'), noticeboardController.getAllnotice);
router.get('/:noticeboard_id', auth('manageUsers'), noticeboardController.getBynotice);
router.put('/:noticeboard_id', auth('manageUsers'), validate(NoticeBoard.updateNotice), noticeboardController.updateBynotice);
router.delete('/:noticeboard_id', auth('manageUsers'), noticeboardController.deletenotice);
module.exports = router;
