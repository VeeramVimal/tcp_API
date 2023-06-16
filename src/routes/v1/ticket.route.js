const express = require('express');
const validate = require('../../middlewares/validate');
const ticketValidation = require('../../validations/ticket.validation');
const ticketController = require('../../controllers/ticket.controller');
const upload = require('../../config/multer');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', upload.single('upload_file'), validate(ticketValidation.createTicket), ticketController.createTicket)
router.get('/', ticketController.getAllTicket);
// router.get('/count', ticketController.getTotalcounts)
router.get('/dashboard', ticketController.getTotalcount);
router.get('/:ticket_id',  ticketController.getOneTicket);
router.put('/:ticket_id', upload.single('upload_file'), ticketController.updateTicket)
router.delete('/:ticket_id', ticketController.deleteTicket);

module.exports = router;
