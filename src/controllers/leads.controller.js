const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { leadsService } = require('../services');

const createLead = catchAsync(async (req, res) => {
    try{
        const category = await leadsService.createLead(req.body);
        if(category){
          res.json({
            code: httpStatus.CREATED,
            message: "leads created successfully"
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
    

const getAllLead = catchAsync(async (req, res) => {
    try {
        const leadsresult = await leadsService.getAllLead();
        res.send(leadsresult);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


const getOneLead = catchAsync(async (req, res) => {
    try {
        const leadsget = await leadsService.getOneLead(req.params.lead_id);
        if (!leadsget) {
            throw new ApiError(httpStatus.NOT_FOUND, 'leads not found');
        }
        res.send(leadsget);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const updateLead = catchAsync(async (req, res) => {
    try {
        const package = await leadsService.updateLead(req.params.lead_id, req.body);
        res.send(package);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const deleteLead = catchAsync(async (req, res) => {
    try{
        const deleteResponse = await leadsService.deleteLead(req.params.lead_id);
         if(deleteResponse) {
           res.json({
             code: httpStatus.CREATED,
             message: 'leads deleted successfully'
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
    createLead,
    getAllLead,
    getOneLead,
    updateLead,
    deleteLead
};  