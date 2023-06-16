const express = require('express');
// const multer = require('multer');
const auth = require('../../middlewares/auth');


const router = express.Router();

router.post('/', auth(), );
router.get('/', auth(), (req, res) => {
    res.json(req.user)
});
router.get('/employee', auth('getUsers'), (req, res) => {
    res.json(req.user)
});
router.get('/admin', auth('manageUsers'), (req, res) => {
    res.json(req.user)
});
module.exports = router;