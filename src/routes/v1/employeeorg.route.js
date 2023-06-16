const express = require('express')
const { employeeorg } = require('../../validations')
const { employeeorgController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router()

router.get('/', employeeorgController.getAllEmployeeOrg)
router.get('/:id', validate(employeeorg.getOneEmployeeOrg), employeeorgController.getOneEmployeeOrg)
router.post('/', validate(employeeorg.createEmployeeOrg), employeeorgController.createEmployeeOrg)
router.put('/:id', validate(employeeorg.updateEmployeeOrg), employeeorgController.updateEmployeeOrg)
router.delete('/:id', validate(employeeorg.deleteEmployeeOrg), employeeorgController.deleteEmployeeOrg)

module.exports = router