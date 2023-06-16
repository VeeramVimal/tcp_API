const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { organisation } = require('../services');

const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harigarangs1999@gmail.com',
      pass: 'yuoisicpxywfhvwz'
    }
  });
  
const createOrganisation = catchAsync(async (req, res) => {
    let data = req.body;
    if(req.file) data.organisation_logo = req.file.path    
  try{
    const createResponse = await organisation.createOrganisation(req.body);
    const mailOptions = {
      from: 'harigarangs1999@gmail.com',
      to: `${createResponse.email}`,
      subject: 'Thinroot',
      html: '<html><body><h1>wellcome to thinroot software....</h1></body></html>'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    if(createResponse){
    res.json({
      code: httpStatus.CREATED,
      message: 'organization created sucessfully',
   })
  }

}
catch(err){
  res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
    code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
    message: err.message ||'internal server error'
  })
}

}); 
const getAllorganisation = catchAsync(async (req, res) => {
  try {
    const package = await organisation.getAllorganisation();
    res.send(package); 
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});
const getOneorganisation = catchAsync(async (req, res) => {
  try {
    const package = await organisation.getOneorganisation(req.params.organisation_id);
    if (!package) {
      throw new ApiError(httpStatus.NOT_FOUND, "organization not found");
    }
    res.send(package);
    
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});


   
const updateorganisation = catchAsync(async (req, res) => {
  let data = req.body;
    if(req.file) data.organisation_logo = req.file.path
  try {
    
    const package = await organisation.updateorganisation(req.params.organisation_id, req.body);
    res.send(package);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

  const deleteorganisation = catchAsync(async (req, res) => {
    try{
      const deleteResponse = await organisation.deleteorganisation(req.params.organisation_id);
      if(deleteResponse) {
        res.json({
          code: httpStatus.CREATED,
          message: 'organisation  deleted successfully'
        })
      }
    }
    catch(err){
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });
  

module.exports = {
    createOrganisation,
    getAllorganisation,
    getOneorganisation,
    updateorganisation,
    deleteorganisation,
};  