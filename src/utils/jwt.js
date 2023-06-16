const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET

const jwtVerify = async (token) => {
  try {
    return { data: await jwt.verify(token, jwtSecret) }
  } catch (err) {
    return { error: err }
  }
}

const jwtDestroy = async (token) => {
  try {
    const { data, error } = await jwtVerify(token)
    if (data) return { data: await jwt.destroy(data.jti) }
    else return { error }
  } catch (err) {
    return { error: errorHandling(err) }
  }
}

const errorHandling = (err) => {
  if (err.message === 'jwt expired') return { message: 'Token expired' }
  else if (['Malformed UTF-8 data', 'invalid token', 'invalid signature'].includes(err.message))
    return { message: 'Invalid token' }
  else if (err.message === 'jwt not active') return { message: 'Token not active' }
  else return err
}

module.exports = {
  errorHandling,
  jwtVerify,
  jwtDestroy
}