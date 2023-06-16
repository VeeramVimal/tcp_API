const Joi = require('joi')

const createExpense = {
    body: Joi.object().keys({
        item_name: Joi.string().required(),
        price: Joi.string().allow('', null).required(),
        employee_id: Joi.number().allow('', null).required(),
        purchased_date: Joi.date().required(),
        purchased_from: Joi.number(),
        status: Joi.string().required(),
        expense_currency: Joi.string().required(),
        expense_project: Joi.number().required(),
        expense_category: Joi.string(),
        expense_bill: Joi.string(),
        expense_accountshead: Joi.string().required(),
        expense_company: Joi.string().required(),
        expense_tds: Joi.string(),
        expense_gst: Joi.string(),
        expense_paymentmode: Joi.string(),
        expense_paymenttype: Joi.string(),
        expense_remarks: Joi.string(),
        expense_billnumber: Joi.string(),
        expense_payamount: Joi.number(),
        expense_billdate: Joi.date(),
        expense_paymentdate: Joi.date(),
        expense_tdsapplicable: Joi.number(),
        expense_gstapplicable: Joi.number(),
    })
}

const updateExpense = {
    params: Joi.object().keys({
        item_id: Joi.required()
    }),
    body: Joi.object().keys({
        status: Joi.string().required().valid('pending', 'resolved')
    })
}

const deleteExpense = {
    params: Joi.object().keys({
        item_id: Joi.required()
    })
}

const getOneExpense = {
    params: Joi.object().keys({
        item_id: Joi.required()
    })
}

module.exports = {
    createExpense,
    updateExpense,
    getOneExpense,
    deleteExpense
}