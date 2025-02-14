import { Sequelize, Options } from 'sequelize';
import config from './config/config';
// import { RegulatedEntityInspectionType } from './models/RegulatedEntityInspectionType';

const env = process.env.NODE_ENV || 'development';
const dbConfig = (config as unknown as { [key: string]: Options })[env];

const sequelize = new Sequelize({
    ...dbConfig,
    define: {
        timestamps: true,
    },
});

// RegulatedEntityInspectionType.initModel(sequelize);
// RegulatedEntityInspectionType.associate({ /* pass models here if needed */ });
export default sequelize;
