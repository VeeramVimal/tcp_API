const express = require('express')
// const { leave } = require('../../validations')
const { chartsController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')
const upload = require('../../config/multer');
const router = express.Router()

router.get('/', chartsController.getAllCharts)
router.get('/:chart_id', chartsController.getOneCharts)
router.post('/', chartsController.createCharts)
router.put('/:chart_id', chartsController.updateByCharts)
router.delete('/:chart_id', chartsController.deleteCharts)

module.exports = router