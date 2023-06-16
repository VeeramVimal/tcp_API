const validator = require("validator");
const bcrypt = require("bcryptjs");
const { roles } = require("../config/roles");
const { USER } = require("../constants/tables");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    USER,
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
      user_name: {
        type: DataTypes.STRING,
      },
      user_avatar: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Invalid email");
          }
        },
      },
      password: {
        type: DataTypes.STRING,
        required: true, 
        trim: true,
        minlength: 8,
        validate(value) {
          if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
            throw new Error(
              "Password must contain at least one letter and one number"
            );
          }
        },
      },
      role: {
        type: DataTypes.ENUM,
        values: roles,
        defaultValue: "candidate",
      },
      status: {
        type: DataTypes.INTEGER,
        required: true,
      },
    },
    {
      timestamps: false,
      tableName: "user",
    }
  );

  User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 8);
    user.password = hashedPassword;
  });

  User.prototype.isPasswordMatch = async function (password) {
    const user = this;
    return bcrypt.compare(password, user.password);
  };

  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());

    delete values.password;
    return values;
  };

  User.sync();
  return User;
};