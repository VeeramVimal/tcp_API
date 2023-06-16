const express = require('express');
const validate = require('../../middlewares/validate');
const employeecontroller = require('../../controllers/ticket.controller');
const dashboardcontroller = require('../../controllers/dashboard.controller');

const router = express.Router();

router.get('/', dashboardcontroller.AdminDashboard)
router.get('/count', employeecontroller.getTotalcount)

module.exports = router;