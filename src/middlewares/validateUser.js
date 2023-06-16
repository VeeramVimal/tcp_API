const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const { tokenService } = require('./../services')
const validateUser = async (req,res,next) => {
    try{
        const userid = await tokenService.verifyToken(req?.headers?.authorization?.replace?.('Bearer ', ''))
        if(userid.userId) req.user_id = userid.userId
        else throw new ApiError(httpStatus.UNAUTHORIZED, "unauthorized user")
        return next()
    }
    catch(error){
        return res.json({
            code: error.code || httpStatus.UNAUTHORIZED,
            message: error.code || 'unauthorized error'
        })
    }
}

module.exports = validateUser;