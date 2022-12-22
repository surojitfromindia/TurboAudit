import { Sequelize } from 'sequelize';

import { User } from '../models/User';
import { Profile } from '../models/Profile';
const sq = new Sequelize({
  database: '1audit',
  username: 'root',
  password: 'surojitmac',
  host: 'localhost',
  dialect: 'mysql',
});

const connectToDB = async () => {
  await sq.authenticate();
  console.log('connected');
  await sq.sync();
};

export { sq, connectToDB };
