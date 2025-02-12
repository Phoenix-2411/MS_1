import { Sequelize, Options } from 'sequelize';
import config from './config/config';

const env = process.env.NODE_ENV || 'development';
const dbConfig = (config as { [key: string]: Options })[env];

const sequelize = new Sequelize({
    ...dbConfig,
    define: {
        timestamps: true,
    },
});

export default sequelize;
