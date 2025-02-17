'use strict';

import sequelize from '../db'; // Import Sequelize instance
import { Attachments, initAttachments } from './attachments';
import { Contacts, initContacts } from './contacts';
import { CovidData, initCovidData } from './covidData';
import { RegulatedEntity, initRegulatedEntity } from './regulatedEntity';
import { RegulatedEntityInspectionType, initRegulatedEntityInspectionType } from './regulatedentityinspectiontype';
import { RegulatedEntityItem, initRegulatedEntityItem } from './regulatedEntityItem';
import { ReitDetails, initReitDetails } from './reitDetails';
import { RiskMetric, initRiskMetric } from './riskMetric';

// Initialize models first
initRegulatedEntity(sequelize);
initRegulatedEntityInspectionType(sequelize);
initRegulatedEntityItem(sequelize);
initContacts(sequelize);
initAttachments(sequelize);
initReitDetails(sequelize);
initCovidData(sequelize);
initRiskMetric(sequelize);

//RegulatedEntity
RegulatedEntity.hasMany(RegulatedEntityInspectionType, { as: 'reInspectionType', foreignKey: 'regulatedEntityId' });
RegulatedEntity.hasMany(RegulatedEntityItem, { as: 'reItem', foreignKey: 'regulatedEntityId' });
RegulatedEntity.hasMany(Contacts, { as: 'contacts', foreignKey: 'regulatedEntityId' });
RegulatedEntity.hasMany(Attachments, { as: 'attachments', foreignKey: 'regulatedEntityId' });

//RegulatedEntityInspectionType
RegulatedEntityInspectionType.belongsTo(RegulatedEntity, { foreignKey: 'regulatedEntityId' });
RegulatedEntityInspectionType.hasMany(RegulatedEntityItem, { as: 'reItem', foreignKey: 'regulatedEntityInspectionTypeId' });
RegulatedEntityInspectionType.hasMany(RiskMetric, { as: 'riskMetrics', foreignKey: 'regulatedEntityInspectionTypeId' });
RegulatedEntityInspectionType.hasMany(Contacts, { as: 'contacts', foreignKey: 'regulatedEntityInspectionTypeId' });
RegulatedEntityInspectionType.hasMany(Attachments, { as: 'attachments', foreignKey: 'regulatedEntityInspectionTypeId' });
RegulatedEntityInspectionType.hasOne(ReitDetails, { as: 'reitDetails', foreignKey: 'regulatedEntityInspectionTypeId' });

//RegulatedEntityItem
RegulatedEntityItem.belongsTo(RegulatedEntity, { foreignKey: 'regulatedEntityId' });
RegulatedEntityItem.belongsTo(RegulatedEntityInspectionType, { as: 'reInspectionType', foreignKey: 'regulatedEntityInspectionTypeId' });
RegulatedEntityItem.hasMany(Attachments, { as: 'attachments', foreignKey: 'regulatedEntityItemId' });

//Contacts
Contacts.belongsTo(RegulatedEntityInspectionType, { foreignKey: 'regulatedEntityInspectionTypeId' });
Contacts.belongsTo(RegulatedEntity, { foreignKey: 'regulatedEntityId' });

// Attachments.removeAttribute('RegulatedEntityInspectionTypeId');s
// Attachments.removeAttribute('RegulatedEntityItemId');
//Attachments
Attachments.belongsTo(RegulatedEntityInspectionType, { foreignKey: 'regulatedEntityInspectionTypeId' });
Attachments.belongsTo(RegulatedEntityItem, { foreignKey: 'regulatedEntityItemId' });
Attachments.belongsTo(RegulatedEntity, { foreignKey: 'regulatedEntityId' });
// console.log("-------row--------", row);


//ReitDetails
ReitDetails.belongsTo(RegulatedEntityInspectionType);

//RiskMetric
RiskMetric.belongsTo(RegulatedEntityInspectionType, { as: 'reInspectionType', foreignKey: 'regulatedEntityInspectionTypeId' });

// Create db object to export
const db: any = {
  RegulatedEntity,
  RegulatedEntityInspectionType,
  RegulatedEntityItem,
  Contacts,
  Attachments,
  ReitDetails,
  CovidData,
  RiskMetric,
  sequelize,
};

// Log loaded models
// console.log('Loaded Models:', Object.keys(db));

export { db as Models };
