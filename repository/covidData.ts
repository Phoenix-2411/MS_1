import { Models } from '../models/index';
import { IPaginationOpts } from '../interface/request';

export const find = async (
	whereObject: object, pagination: IPaginationOpts
) => {
	const rows = await Models.CovidData.findAll({
		where: whereObject,
		limit: !pagination.all ? pagination.pageSize : undefined,
		offset: !pagination.all ? pagination.offset : undefined
	});
	const count = rows.length;
	return { rows, count };
};
