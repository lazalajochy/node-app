import { Sequelize } from "sequelize";
import { db } from "../config/config.js";
const User = db.define("User", {
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
  
  export default User;
  