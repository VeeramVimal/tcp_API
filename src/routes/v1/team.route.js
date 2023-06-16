const express = require('express')
const { team } = require('../../validations')
const { teamController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router()

router.get('/', teamController.getAllTeam)
router.get('/:team_id', validate(team.getOneTeam), teamController.getOneTeam)
router.post('/', validate(team.createTeam), teamController.createTeam)
router.put('/:team_id', validate(team.updateTeam), teamController.updateTeam)
router.delete('/:team_id', validate(team.deleteTeam), teamController.deleteTeam)

module.exports = router
