import { Models } from '../models';
import { IPaginationOpts } from '../interface/request';


export const find = async (where: { [key: string]: any }) => {
	where['deleted'] = false;
	return await Models.Attachments.findAll({ where: where });
};

// export const list = async (
// 	whereObject: { [key: string]: any },
// 	pagination: IPaginationOpts
// ) => {
// 	whereObject['deleted'] = false;
// 	const totalCount = await Models.Attachments.findAll({ where: whereObject });
// 	const count = (totalCount.length) ? totalCount.length : 0;

// 	let rows: any;
// 	rows = await Models.Attachments.findAll({
// 		where: whereObject,
// 		limit: !pagination.all ? pagination.pageSize : undefined,
// 		offset: !pagination.all ? pagination.offset : undefined,
// 		order: [['updatedAt', 'DESC']]
// 	});
// whereObject: Record<string, any>,
// 	return { count, rows };
// };

export const list = async (
	whereObject: { [key: string]: any },
	pagination: IPaginationOpts
) => {
	whereObject['deleted'] = false;

	const count = await Models.Attachments.count({ where: whereObject });
	const rows = await Models.Attachments.findAll({
		where: whereObject,
		limit: !pagination.all ? pagination.pageSize : undefined,
		offset: !pagination.all ? pagination.offset : undefined,
		order: [[pagination.sortBy || 'updatedAt', pagination.sortOrder || 'DESC']]
	});


	return { count, rows };
};


