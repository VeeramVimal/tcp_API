const express = require('express')
// const { leave } = require('../../validations')
const { skillController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')
const upload = require('../../config/multer');
const router = express.Router()

router.get('/', auth('getUsers'), skillController.getAllskills)
router.get('/:skill_id', auth('getUsers'), skillController.getoneskill)
router.post('/', auth('getUsers'), skillController.createskill)
router.put('/:skill_id', auth('getUsers'), skillController.updateskill)
router.delete('/:skill_id', auth('getUsers'), skillController.deleteskill)

module.exports = router