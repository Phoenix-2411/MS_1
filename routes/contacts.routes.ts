import express, { Request, Response } from 'express';
import { find, list, listREContact } from '../repository/contacts';
import { IPaginationOpts } from '../interface/request';

const router = express.Router();


router.get('/list', async (req: Request, res: Response) => {
    try {
        // Extract query parameters
        const { page = '1', pageSize = '10', all = 'false', ...filters } = req.query;

        // Pagination options
        const pagination: IPaginationOpts = {
            pageSize: parseInt(pageSize as string, 10),
            offset: (parseInt(page as string, 10) - 1) * parseInt(pageSize as string, 10),
            all: all === 'true',
            sortBy: (req.query.sortBy as string) || 'updatedAt',
            sortOrder: (req.query.sortOrder as string)?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'
        };

        // Execute query function
        const data = await list(filters as Record<string, any>, pagination);

        // Return JSON response
        res.json(data);
    } catch (error) {
        console.error('Error fetching contacts list:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/list/listREContact', async (req: Request, res: Response) => {
    try {
        const { page = '1', pageSize = '10', all = 'false', sortBy, sortOrder, ...filters } = req.query;

        const pagination: IPaginationOpts = {
            pageSize: parseInt(pageSize as string, 10),
            offset: (parseInt(page as string, 10) - 1) * parseInt(pageSize as string, 10),
            all: all === 'true',
            sortBy: (req.query.sortBy as string) || 'updatedAt',
            sortOrder: (req.query.sortOrder as string)?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'
        };
        const data = await listREContact(filters as Record<string, any>, pagination);
        res.json(data);
    } catch (error) {
        console.error('Error fetching RE contacts list:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export { router as contactsRouter };
