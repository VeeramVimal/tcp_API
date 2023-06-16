const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { expenseService } = require('../services');


const createExpense = catchAsync(async (req, res) => {
    try {
        let data = req.body;
        if(req.file) data.expense_bill = req.file.path
        const expense = await expenseService.createExpense(req.body);
        res.status(httpStatus.CREATED).send(expense);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const getAllExpense = catchAsync(async (req, res) => {
    try {
        const expenseresult = await expenseService.getAllExpense();
        res.send(expenseresult);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


const getOneExpense = catchAsync(async (req, res) => {
    try {
        const expenseget = await expenseService.getOneExpense(req.params.item_id);
        if (!expenseget) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Joblist not found');
        }
        res.send(expenseget);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const updateByExpense = catchAsync(async (req, res) => {
    try {
        let data = req.body;
        if(req.file) data.expense_bill = req.file.path
        const package = await expenseService.updateExpense(req.params.item_id, req.body);
        res.send(package);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const deleteExpense = catchAsync(async (req, res) => {
    try {
        await expenseService.deleteExpense(req.params.item_id);
        res.json(" expense Deleted success");
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


module.exports = {
    createExpense,
    getAllExpense,
    getOneExpense,
    updateByExpense,
    deleteExpense
};  