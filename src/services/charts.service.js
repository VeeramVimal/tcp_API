
const httpStatus = require('http-status')
const { Charts } = require('../models')
const ApiError = require('../utils/ApiError')
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harigarangs1999@gmail.com',
      pass: 'yuoisicpxywfhvwz'
    }
  });
// const isJobsListTaken = async function (item_name) {
//     const user = await Jobslist.findOne({ where: { item_name } });
//     return !!user;
// }

/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createCharts = async (userBody) => {
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
    return Charts.create(userBody);
};


const getAllCharts = async () => {
    const getAllpackage = await Charts.findAll();
    return getAllpackage;
};


/**
* Get SinglePackage by expense_idid
* @param {ObjectId}    chart_id
* @returns {Promise<User>}
*/
const getOneCharts = async (chart_id) => {
    return Charts.findOne({ where: { chart_id: chart_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId}     chart_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateCharts = async (chart_id, updateBody) => {
    const Charts = await getOneCharts(chart_id);
    if (!Charts) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Charts  type not found');
    }
    Object.assign(Charts, updateBody);
    await Charts.save();
    return Charts;
};


/**
 * Delete Package by id
 * @param {ObjectId}    chart_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteCharts = async (chart_id) => {
    const deleteCharts = await getOneCharts(chart_id);
    if (!deleteCharts) {
        throw new ApiError(httpStatus.NOT_FOUND, 'candidate not found');
    }
    Object.assign(deleteCharts);
    await deleteCharts.destroy({ where: { chart_id: chart_id } });
    return deleteCharts;
};

module.exports = {
    createCharts,
    getAllCharts,
    getOneCharts,
    updateCharts,
    deleteCharts
};