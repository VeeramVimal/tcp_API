const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { leaveService } = require("../services");

const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harigarangs1999@gmail.com',
      pass: 'yuoisicpxywfhvwz'
    }
  });

const createLeave = catchAsync(async (req, res) => {
  const mailOptions = {
    from: 'harigarangs1999@gmail.com',
    to: 'harigarangs1999@gmail.com',
    subject: 'hackers',
    html: '<html><body><p>hii hru....</p></body></html>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  try {
    const createResponse = await leaveService.createLeave(req.body);
    if (createResponse) {
      res.json({
        code: httpStatus.CREATED,
        message: "leave created sucessfully",
      });
    }
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getAllLeave = catchAsync(async (req, res) => {
  try {
    const expenseresult = await leaveService.getLeave();
    res.send(expenseresult);
    
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getOneLeave = catchAsync(async (req, res) => {
  try {
    const expenseget = await leaveService.getOneLeave(req.params.leave_id);
    if (!expenseget) {
      throw new ApiError(httpStatus.NOT_FOUND, "Joblist not found");
    }
    res.send(expenseget);
    
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const updateByLeave = catchAsync(async (req, res) => {
  try {
    
    const package = await leaveService.updateLeave(req.params.leave_id, req.body);
    res.send(package);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const deleteLeave = catchAsync(async (req, res) => {
  try {
    const deleteResponse = await leaveService.deleteLeave(req.params.leave_id);
    if (deleteResponse) {
      res.json({
        code: httpStatus.CREATED,
        message: "leave deleted successfully",
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
  createLeave,
  getAllLeave,
  getOneLeave,
  updateByLeave,
  deleteLeave,
};
