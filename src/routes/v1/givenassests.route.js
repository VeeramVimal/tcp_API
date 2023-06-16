const express = require('express')
const { givenassests } = require('../../validations')
const { givencontroller } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router()
router.get('/admin', givencontroller.getAllGiven)
router.get('/functional', givencontroller.getFunctionalAssets)
router.get('/employee', givencontroller.getEmployeeAssets)
router.get('/admin/:id', validate(givenassests.getOneGiven), givencontroller.getOneGiven)
router.post('/admin', validate(givenassests.createGiven), givencontroller.createGiven)
router.put('/admin/:id', validate(givenassests.updateGiven), givencontroller.updateByGiven)
router.delete('/admin/:id', validate(givenassests.deleteGiven),givencontroller.deleteGiven)

module.exports = router
