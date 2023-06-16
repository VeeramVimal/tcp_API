const express = require('express')
const { expense } = require('../../validations')
const { expenseController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')
const upload = require('../../config/multer');
const router = express.Router()

router.get('/', expenseController.getAllExpense)
router.get('/:item_id', expenseController.getOneExpense)
router.post('/', upload.single('expense_bill'), expenseController.createExpense)
router.put('/:item_id', upload.single('expense_bill'), expenseController.updateByExpense)
router.delete('/:item_id', expenseController.deleteExpense)

module.exports = router
