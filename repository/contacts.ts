import { Models } from '../models';
import { IPaginationOpts } from '../interface/request';

export const find = async (where: { [key: string]: any }) => {
	where['deleted'] = false;
	return Models.contacts.findAll({ where });
};

// export const list = async (where: { [key: string]: any }, pagination: IPaginationOpts) => {
// 	let orderBy = where['orderBy'];
// 	const clientCode = where['clientCode'];
// 	if (orderBy) {
// 		orderBy = [[where['orderBy'], where['sortOrder']]];
// 	}
// 	const fetchFromRe: string = where['fetchFromRe'];
// 	let model;
// 	let include;
// 	if (fetchFromRe && fetchFromRe.toLowerCase() === 'true') {
// 		model = Models.RegulatedEntity;
// 		include = [
// 			{
// 				model: Models.RegulatedEntity,
// 				where: { deleted: false, clientCode },
// 				attributes: ['name', 'address', 'state', 'county', 'country', 'zip', 'municipality'],
// 				required: false
// 			},
// 		];
// 	} else {
// 		model = Models.RegulatedEntityInspectionType;
// 		include = [{
// 			model: Models.RegulatedEntityInspectionType,
// 			where: { deleted: false, clientCode },
// 			attributes: ['name', 'address', 'state', 'county', 'country', 'zip', 'municipality'],
// 			required: true
// 		}];
// 	}

// 	delete where['fetchFromRe'];
// 	delete where['orderBy'];
// 	delete where['sortOrder'];
// 	delete where['clientCode'];
// 	where['deleted'] = false;


// 	const count = await Models.Contacts.count({
// 		where: { ...where },
// 		include: include
// 	});

// 	if (count === undefined) {
// 		throw new Error('Count query returned undefined');
// 	}
// 	let rows = await Models.Contacts.findAll({
// 		where: where,
// 		include: include,
// 		limit: !pagination.all ? pagination.pageSize : undefined,
// 		offset: !pagination.all ? pagination.offset : undefined,
// 		order: (orderBy) ? orderBy : [['updatedAt', 'DESC']]
// 	});
// 	if (fetchFromRe && fetchFromRe.toLowerCase() === 'true') {
// 		rows = await Promise.all(rows.map(async (row: any) => {
// 			if (row['RegulatedEntity'] == null) { // Sequelize didn't fetch it
// 				const reit = await Models.RegulatedEntityInspectionType.findOne({
// 					where: {
// 						id: row.regulatedEntityInspectionTypeId!,
// 						deleted: false,
// 						clientCode
// 					},
// 					include: [
// 						{
// 							model: Models.RegulatedEntity,
// 							required: true,
// 							attributes: ['name', 'address', 'state', 'county', 'country', 'zip', 'municipality'],
// 							where: { deleted: false, clientCode }
// 						}
// 					]
// 				});
// 				if (reit && reit['RegulatedEntity']) {
// 					row['RegulatedEntity'] = reit['RegulatedEntity'];
// 					row.setDataValue('RegulatedEntity', reit['RegulatedEntity']);
// 					row.setDataValue('regulatedEntityId', reit.regulatedEntityId);
// 				}
// 			}

// 			return row;
// 		}));

// 	}


// 	return { count, rows };
// }


// optimized

export const list = async (
	where: Record<string, any>,
	pagination: IPaginationOpts
) => {
	// Extract special query parameters and convert to proper types
	const orderBy = where['orderBy'] ? [[where['orderBy'], where['sortOrder']]] : undefined;
	const clientCode = where['clientCode'];
	const fetchFromRe = (where['fetchFromRe'] || '').toLowerCase() === 'true';

	// Determine the include clause based on fetchFromRe
	let include;
	if (fetchFromRe) {
		include = [{
			model: Models.RegulatedEntity,
			where: { deleted: false, clientCode },
			attributes: ['name', 'address', 'state', 'county', 'country', 'zip', 'municipality'],
			required: false
		}];
	} else {
		include = [{
			model: Models.RegulatedEntityInspectionType,
			where: { deleted: false, clientCode },
			attributes: ['name', 'address', 'state', 'county', 'country', 'zip', 'municipality'],
			required: true
		}];
	}

	// Remove the special keys from the where clause
	delete where['fetchFromRe'];
	delete where['orderBy'];
	delete where['sortOrder'];
	delete where['clientCode'];
	where['deleted'] = false;

	// Get the total count of matching records
	const count = await Models.Contacts.count({
		where,
		include: include
	});

	// Get the paginated rows with sorting applied
	let rows = await Models.Contacts.findAll({
		where,
		include: include.length ? include : undefined,
		limit: !pagination.all ? pagination.pageSize : undefined,
		offset: !pagination.all ? pagination.offset : undefined,
		order: orderBy || [['updatedAt', 'DESC']]
	});


	if (fetchFromRe) {
		// Filter rows to include only those where RegulatedEntity is missing
		const missingRows = rows.filter((row: { RegulatedEntity: any }) => !row.RegulatedEntity);

		// Proceed only if there are missing rows to resolve
		if (missingRows.length > 0) {
			const missingRegulatedEntities = await Models.RegulatedEntityInspectionType.findAll({
				where: {
					id: missingRows.map((row: { regulatedEntityInspectionTypeId: any }) => row.regulatedEntityInspectionTypeId),
					deleted: false,
					clientCode
				},
				include: [{
					model: Models.RegulatedEntity,
					required: true,
					attributes: ['id', 'name', 'address', 'state', 'county', 'country', 'zip', 'municipality'],
					where: { deleted: false, clientCode }
				}]
			});

			// Map regulatedEntityInspectionTypeId to the extracted RegulatedEntity data
			const reitMap = new Map<string, { regulatedEntityId: string; regulatedEntityWithoutId: Record<string, any> }>(
				missingRegulatedEntities.map((reit: { RegulatedEntity: { dataValues: { id: string;[key: string]: any }; }; id: any; }) => {
					const regulatedEntity = reit.RegulatedEntity?.dataValues || {}; // Extract only dataValues
					const { id, ...regulatedEntityWithoutId } = regulatedEntity; // Separate id from other fields
					return [reit.id, { regulatedEntityId: id, regulatedEntityWithoutId }];
				})
			);

			// Assigning respective objects to only missing rows
			missingRows.forEach((row: { regulatedEntityInspectionTypeId: string; setDataValue: (key: string, value: any) => void }) => {
				const regulatedEntityData = reitMap.get(row.regulatedEntityInspectionTypeId);
				if (regulatedEntityData) {
					row.setDataValue('RegulatedEntity', regulatedEntityData.regulatedEntityWithoutId); // Store fields except `id`
					row.setDataValue('regulatedEntityId', regulatedEntityData.regulatedEntityId); // Store only `id`
				}
			});
		}
	}

	return { count, rows };
};


// export const listREContact = async (where: { [key: string]: any }, pagination: IPaginationOpts) => {
// 	let orderBy = where['orderBy'];
// 	delete where['orderBy'];
// 	where['deleted'] = false;

// 	try {
// 		if (typeof orderBy === 'string') {
// 			orderBy = JSON.parse(orderBy); // Parse if it's a JSON string
// 		}
// 		if (!Array.isArray(orderBy)) {
// 			orderBy = [['updatedAt', 'DESC']]; // Default sorting
// 		}
// 	} catch (error) {
// 		console.error('Invalid orderBy format:', error);
// 		orderBy = [['updatedAt', 'DESC']]; // Fallback if parsing fails
// 	}

// 	const totalCount = await Models.Contacts.findAll({ where: where });
// 	const count = (totalCount.length) ? totalCount.length : 0;
// 	let rows: Object[];
// 	rows = await Models.Contacts.findAll({
// 		where: where,
// 		limit: !pagination.all ? pagination.pageSize : undefined,
// 		offset: !pagination.all ? pagination.offset : undefined,
// 		// order: (orderBy) ? orderBy : [['updatedAt', 'DESC']]
// 		order: orderBy
// 	});
// 	return { count, rows };
// }

//optimized

export const listREContact = async (where: { [key: string]: any }, pagination: IPaginationOpts) => {
	where['deleted'] = false;
	const count = await Models.Contacts.count({ where: where });
	const rows = await Models.Contacts.findAll({
		where: where,
		limit: !pagination.all ? pagination.pageSize : undefined,
		offset: !pagination.all ? pagination.offset : undefined,
		order: [[pagination.sortBy || 'updatedAt', pagination.sortOrder || 'DESC']]
	});
	return { count, rows };
}
