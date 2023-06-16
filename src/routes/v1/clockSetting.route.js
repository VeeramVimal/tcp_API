const express = require('express')
const { ClockSetting } = require('../../validations')
const { ClockSettingController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router();

router.get('/',ClockSettingController.getAllSettings);
router.post('/', validate(ClockSetting), ClockSettingController.createClockSetting);
module.exports = router