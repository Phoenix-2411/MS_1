import express, { Request, Response } from 'express';
import { find, list } from '../repository/attachments';
import { IPaginationOpts } from '../interface/request';

const router = express.Router();

router.get('/find', async (req: Request, res: Response) => {
    try {
        const where = req.query || {};
        const results = await find(where);
        res.json(results);
    } catch (error) {
        console.error('Error fetching attachments:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/list', async (req: Request, res: Response) => {
    try {
        const { page = '1', pageSize = '10', all = 'false', ...filters } = req.query;

        const pagination: IPaginationOpts = {
            pageSize: parseInt(pageSize as string, 10),
            offset: (parseInt(page as string, 10) - 1) * parseInt(pageSize as string, 10),
            all: all === 'true',
            sortBy: (req.query.sortBy as string) || 'updatedAt',
            sortOrder: (req.query.sortOrder as string)?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'
        };

        const data = await list(filters as Record<string, any>, pagination);
        res.json(data);
    } catch (error) {
        console.error('Error fetching attachment list:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export { router as attachmentsRouter };
