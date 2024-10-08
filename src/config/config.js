const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire'),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which reset password token expires'),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which verify email token expires'),
    SMTP_HOST: Joi.string().description('server that will send the emails'),
    SMTP_PORT: Joi.number().description('port to connect to the email server'),
    SMTP_USERNAME: Joi.string().description('username for email server'),
    SMTP_PASSWORD: Joi.string().description('password for email server'),
    EMAIL_FROM: Joi.string().description('the from field in the emails sent by the app'),
    DB_HOST: Joi.string().required().description('Database Host'),
    DB_USERNAME: Joi.string().required().description('Database user name'),
    DB_PASSWORD: Joi.any(),
    DB_DATABASE: Joi.string().required().description('Database name')
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  development: {
    username: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_DATABASE,
    host: envVars.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8',
      timezone: 'Etc/GMT-7',
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      freezeTableName: true,
      timestamps: false
    },
    logging: false,
  },
  test: {
    username: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_DATABASE,
    host: envVars.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8',
      timezone: 'Etc/GMT-7',
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    define: {
      charset: 'mysql',
      collate: 'utf8_general_ci',
      freezeTableName: true,
      timestamps: false

    },
  },
  production: {
    username: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_DATABASE,
    host: envVars.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8',
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    timezone: '+07:00',
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      freezeTableName: true,
      timestamps: false
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
};
