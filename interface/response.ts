// tslint:disable:max-classes-per-file
import config from '../config/index';

export interface IResponse {
	body(status: number): IResponseObject;
}

interface IResponseObject {
	meta: {
		status?: number;

		// In case of error
		error?: string;
		message?: string;

		// Pagination
		total?: number;
		pageSize?: number;
		offset?: number;

		[s: string]: string | number | boolean | undefined;
	};
	data: object;
}

/**
 * BulkOpsResponse is used when a bulk operation is performed and total number
 * of successful and failed operation count has to be returned only
 */
export class BulkOpsResponse implements IResponse {
	constructor(private success: number, private failure: number) {}

	public body(status: number): IResponseObject {
		return {
			meta: {
				status,
				success: this.success,
				failure: this.failure
			},
			data: {}
		};
	}
}

/**
 * ErrorResponse is used for responding requests with errors
 * This class is mainly used in response middleware
 */
export class ErrorResponse implements IResponse {
	constructor(private error: Error) {}

	public body(status: number): IResponseObject {
		let message: string = this.error.message;

		// Hide the message in case of 500
		if (status === 500) {
			message = 'An internal server error occurred.';
		}

		let stack: string | undefined;
		if (config.env !== 'production') {
			stack = this.error.stack;
		}

		return {
			meta: {
				status,
				error: this.error.name,
				message,
				stack
			},
			data: {}
		};
	}
}

export class PlainErrorResponse implements IResponse {
	constructor(private error: Error) {}

	public body(status: number): IResponseObject {
		let message: string = this.error.message;

		// Hide the message in case of 500
		if (status === 500) {
			message = 'An internal server error occurred.';
		}

		let stack: string | undefined;
		if (config.env !== 'production') {
			stack = this.error.stack;
		}

		return {
			meta: {
				error: this.error.name,
				message,
				stack
			},
			data: {}
		};
	}
}

/**
 * ObjectResponse is used when a single entity is requested
 */
export class ObjectResponse<T extends object> implements IResponse {
	constructor(private data: T) {}

	public body(status: number): IResponseObject {
		return {
			meta: {
				status
			},
			data: this.data
		};
	}
}

export class SingleObjectResponse<T extends object> implements IResponse {
	constructor(private data: T) {}

	public body(): any {
		return {
			data: this.data
		};
	}
}

export class BlankObjectResponse implements IResponse {
	constructor() {}

	public body(): any {
		return {};
	}
}

export class PlainObjectResponse<T extends object> implements IResponse {
	constructor(private data: T) {}

	public body(): any {
		return {
			...this.data
		};
	}
}

/**
 * ObjectErrorResponse is used when a single entity is requested
 */
export class ObjectErrorResponse implements IResponse {
	constructor(private data: any) {}

	public body(): IResponseObject {
		return {
			meta: {
				// status: this.data.error.statusCode,
				error: this.data.error.name,
				message: this.data.error.message,
				stack: this.data.error.stack
			},
			data: this.data.data
		};
	}
}

/**
 * PaginatedResponse is used along with IPaginatedRequest
 * This specifically renders the rows inside data as a key, this is to
 * support mobile/web clients to easily write parsers based on key name.
 */
export class PaginatedResponse<T> implements IResponse {
	constructor(
		private key: string,
		private rows: T[],
		private total: number,
		private pageSize: number,
		private offset: number
	) {}

	public body(status: number): IResponseObject {
		return {
			meta: {
				status,
				total: this.total,
				pageSize: this.pageSize,
				offset: this.offset
			},
			data: {
				[this.key]: this.rows
			}
		};
	}
}

export class PlainPaginatedResponse<T> implements IResponse {
	constructor(
		private rows: T[],
		private total: number,
		private pageSize: number,
		private offset: number
	) {}

	public body(status: number): IResponseObject {
		return {
			meta: {
				status,
				total: this.total,
				pageSize: this.pageSize,
				offset: this.offset
			},
			data: this.rows
		};
	}
}
