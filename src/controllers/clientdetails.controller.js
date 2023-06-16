const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { clientdetailsService } = require('../services');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harigarangs1999@gmail.com',
      pass: 'yuoisicpxywfhvwz'
    }
  });
const createClientdetails = catchAsync(async (req, res) => {
    try{
      const clientResponse = await clientdetailsService.createClientdetails(req.body)
      console.log(clientResponse, "response")
      
      const mailOptions = {
        from: 'harigarangs1999@gmail.com',
        to: `${clientResponse.contact_email}`,
        subject: 'thinroot',
        html: '<html><body><p>hii hru....</p></body></html>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
      if(clientResponse) res.json({
        code: httpStatus.CREATED,
        message: 'client details added successfully'
      })
    }
    catch(err){
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });


  const getAllClientdetails = catchAsync(async (req, res) => {
    try{
      const clientResponse = await clientdetailsService.getAllClientdetails()
      res.send(clientResponse)
    }
    catch(err){
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });


  const getOneClientdetails = catchAsync(async (req, res) => {
    try{
      const clientResponse = await clientdetailsService.getOneClientdetails(req.params.client_id)
      res.send(clientResponse);
    }
    catch(err){
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });

  const updateClientdetails = catchAsync(async (req, res) => {
    try{
      const Clientdetails = await clientdetailsService.updateClientdetails(req.params.client_id, req.body);
      if(Clientdetails) res.json({
        code: httpStatus.OK,
        message: 'client details updated successfully'
      });
    }
    catch(err){
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });

  const deleteClientdetails = catchAsync(async (req, res) => {
    try{
      const clientResponse = await clientdetailsService.deleteClientdetails(req.params.client_id );
      if(clientResponse) res.json({
        code: httpStatus.OK,
        message: 'client details deleted successfully'
      });
    }
    catch(err){
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });
  
module.exports = {
    createClientdetails,
    getAllClientdetails,
    deleteClientdetails,
    updateClientdetails,
    getOneClientdetails
};  