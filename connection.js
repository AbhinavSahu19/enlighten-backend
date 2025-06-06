const Sequelize = require("sequelize");
const dotenv = require("dotenv");

const envFile = `.env.development`;
dotenv.config({ path: envFile });

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);

async function connectDb() {
  return sequelize
    .authenticate()
    .then(() => console.log("Mysql DB connected"))
    .catch((err) =>
      console.error("Unable to connect to the database:", err)
    );
}

module.exports = connectDb;
