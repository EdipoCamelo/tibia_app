import mysql from 'mysql2/promise'
import { Sequelize } from 'sequelize'

const config = require('config.json');


module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = config.database;
  const connection = await mysql.createConnection({ host, port, user, password });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

  // init models and add them to the exported db object
  db.Account = require('../models/accounts')(sequelize);
  db.RefreshToken = require('../models/refresh-token')(sequelize);

  // define relationships
  db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
  db.RefreshToken.belongsTo(db.Account);

  // sync all models with database
  await sequelize.sync();
}
