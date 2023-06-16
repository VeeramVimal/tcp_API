const express = require('express');
const { employeeController } = require('../../controllers')
const { employee } = require('../../validations')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')
const multer = require('../../config/multer');

const router = express.Router()

router.get('/task/:user_id', employeeController.gettaskcount)
router.get('/project/:user_id', employeeController.getprojectcount)
router.get('/leave/:leave_id', employeeController.getTotalcounts)
router.get('/', auth('manageUsers'), employeeController.getEmployee)
router.get('/short', auth('manageUsers'), employeeController.getShortemployee)
router.get('/assets', auth('manageUsers'), employeeController.getEmployeeAssets)
router.get('/:user_id', auth('manageUsers'), validate(employee.getOneEmployee), employeeController.getOneEmployee)
router.get('/:user_id', auth('manageUsers'), validate(employee.getOneEmployee), employeeController.getOneEmployee)
router.put('/:user_id', auth('manageUsers'), multer.single('employee_avatar'), validate(employee.updateEmployee), employeeController.updateEmployee)
router.delete('/:user_id', auth('manageUsers'), validate(employee.deleteEmployee), employeeController.deleteEmployee)

module.exports = router;