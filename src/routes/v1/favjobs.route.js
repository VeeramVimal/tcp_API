const express = require('express')
const { favjobs } = require('../../validations')
const { favjobsController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router()

router.get('/', auth('getUsers'), favjobsController.getFavJobs)
router.post('/', auth('getUsers'), validate(favjobs.createFavJobs), favjobsController.createFavJobs)
router.delete('/:job_id', auth('getUsers'), validate(favjobs.deleteFavJobs), favjobsController.deleteFavJobs)

module.exports = router
