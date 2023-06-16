const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { ticketService } = require("../services");

const createTicket = catchAsync(async (req, res) => {
  let data = req.body;
  if (req.file) data.upload_file = req.file.path;
  try {
    const createResponse = await ticketService.createTicket(req.body);
    if (createResponse) {
      res.json({
        code: httpStatus.CREATED,
        message: "ticket created sucessfully",
      });
    }
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getAllTicket = catchAsync(async (req, res) => {
  try {
    
    const ticket = await ticketService.getAllTicket();
    res.send(ticket);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});
const getTotalcount = catchAsync(async (req, res) => {
  try{
    const total_ticket = await ticketService.getTotalcounts();
    const closed_ticket = await ticketService.getClosedcounts();
    const open_ticket = await ticketService.getOpencounts();
    const pending_ticket = await ticketService.getPendingcounts();
    const resolved_ticket = await ticketService.getresolvedcounts();
  
    const total_tickets = total_ticket.length;
    const closed_tickets = closed_ticket.length;
    const open_tickets = open_ticket.length;
    const pending_tickets = pending_ticket.length;
    const resolved_tickets = resolved_ticket.length;
  
    res.send({
      total_tickets,
      closed_tickets,
      open_tickets,
      pending_tickets,
      resolved_tickets,
    });
  }
 catch(err){
  res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
    code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
    message: err.message ||'internal server error'
  })
  }
});


const getOneTicket = catchAsync(async (req, res) => {
  try {
    
    const ticket = await ticketService.getOneTicket(req.params.ticket_id);
    if (!ticket) {
      throw new ApiError(httpStatus.NOT_FOUND, "ticket not found");
    }
    res.send(ticket);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const updateTicket = catchAsync(async (req, res) => {
  try {
    let data = req.body;
    if (req.file) data.upload_file = req.file.path;
    const package = await ticketService.updateTicket(
      req.params.ticket_id,
      req.body
    );
    res.send(package);
    
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const deleteTicket = catchAsync(async (req, res) => {
  try {
    const deleteResponse = await ticketService.deleteTicket(
      req.params.ticket_id
    );
    if (deleteResponse) {
      res.json({
        code: httpStatus.CREATED,
        message: "Ticket deleted successfully",
      });
    }
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

module.exports = {
  createTicket,
  getAllTicket,
  getOneTicket,
  updateTicket,
  getTotalcount,
  deleteTicket,
};
