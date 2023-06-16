const express = require('express')
// const { leave } = require('../../validations')
const { dashboardcardController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')
const upload = require('../../config/multer');
const router = express.Router()

router.get('/', dashboardcardController.getAllDashboardcard)
router.get('/task', dashboardcardController.taskDashboard)
router.get('/leave', dashboardcardController.leaveDashboard)
router.get('/ticket', dashboardcardController.ticketDashboard)
router.get('/:card_id', dashboardcardController.getOneDashboardcard)
router.post('/', upload.single('card_image'), dashboardcardController.createDashboardcard)
router.put('/:card_id', upload.single('card_image'), dashboardcardController.updateByDashboardcard)
router.delete('/:card_id', dashboardcardController.deleteDashboardcard)

module.exports = router