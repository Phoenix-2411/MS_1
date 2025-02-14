// export interface IPaginationOpts {
// 	all?: boolean;
// 	pageSize: number;
// 	offset: number;
// 	sortBy: string;
// 	sortOrder: string;
// }
export interface IPaginationOpts {
	page?: number; // Added missing page field
	all?: boolean;
	pageSize: number;
	offset: number;
	sortBy?: string; // Made optional to prevent errors if not provided
	sortOrder?: 'ASC' | 'DESC'; // Restricted values for safer sorting
}
