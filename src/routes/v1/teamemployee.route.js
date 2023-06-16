const express = require('express')
const { teamemployee } = require('../../validations')
const { teamemployeeController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router()

router.get('/', teamemployeeController.getAllTeamemployee)
router.get('/:team_id', validate(teamemployee.getOneTeamemployee), teamemployeeController.getOneTeamemployee)
router.post('/', validate(teamemployee.createTeamemployee), teamemployeeController.createTeamemployee)
router.put('/:team_id', validate(teamemployee.updateTeamemployee), teamemployeeController.updateTeamemployee)
router.delete('/:team_id', validate(teamemployee.deleteTeamemployee), teamemployeeController.deleteTeamemployee)

module.exports = router