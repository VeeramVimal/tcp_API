const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { noticeService } = require('../services');

const createnotice = catchAsync(async (req, res) => {
  try{
    const category = await noticeService.createNotice(req.body);
    if(category){
      res.json({
        code: httpStatus.CREATED,
        message: "noticeboard created successfully"
      })
    }
  }
  catch(err){
      res.json({
          code:err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
          message:err.message ||  "internal server error"
      })
  }
     res.status(httpStatus.CREATED).send(category);
  });

const getAllnotice = catchAsync(async (req, res) => {
  try{
    const noticeboard = await noticeService.getAllNotice();
    res.send(noticeboard);
  }
  catch(err){
    res.json({
        code:err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message:err.message ||  "internal server error"
    })
  }   
  });


  const getBynotice = catchAsync(async (req, res) => {
    try{
      const noticeboard = await noticeService.getOneNotice(req.params.noticeboard_id);
      if (!noticeboard) {
        throw new ApiError(httpStatus.NOT_FOUND, 'noticeboard not found');
      }
      res.json(noticeboard)
    }
    catch(err){
      res.json({
          code:err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
          message:err.message ||  "internal server error"
      })
    }
  });

  const updateBynotice = catchAsync(async (req, res) => {
    try {
      const package = await noticeService.updateNotice(req.params.noticeboard_id, req.body);
      res.send(package);
    } catch (err) {
      res.json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });
  

  const deletenotice = catchAsync(async (req, res) => {
    try{
      const deleteResponse = await noticeService.deleteNotice(req.params.noticeboard_id);
       if(deleteResponse) {
         res.json({
           code: httpStatus.CREATED,
           message: 'noticeboard deleted successfully'
         })
       }
     }
     catch(err){
       res.json({
         code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
         message: err.message ||'internal server error'
       })
     }
  });
  

module.exports = {
    createnotice,
    getAllnotice,
    getBynotice,
    updateBynotice,
    deletenotice
};  