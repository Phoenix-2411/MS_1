import express, { Request, Response } from 'express';
import { find, findById, O1, O2 } from '../repository/regulatedEntity';
import { IPaginationOpts } from '../interface/request';

const router = express.Router();

router.get('/find', async (req: Request, res: Response) => {
    try {
        // Destructure query parameters and set default values.
        // 'details' determines whether to include additional associated data.
        const {
            page = '1',
            pageSize = '10',
            all = 'false',
            sortBy,
            sortOrder = 'ASC',
            details = 'false',
            ...filters
        } = req.query;

        const pagination: IPaginationOpts = {
            pageSize: parseInt(pageSize as string, 10),
            offset: (parseInt(page as string, 10) - 1) * parseInt(pageSize as string, 10),
            all: all === 'true',
            sortBy: (sortBy as string) || 'updatedAt',
            sortOrder: ((sortOrder as string)?.toUpperCase() === 'ASC') ? 'ASC' : 'DESC'
        };

        // Call the find function with filters, pagination, and details flag.
        const data = await find(filters as Record<string, any>, pagination, details as string);
        res.json(data);
    } catch (error) {
        console.error('Error fetching regulated entities:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/findById', async (req: Request, res: Response) => {
    try {
        // Destructure query parameters and set default values.
        // 'details' determines whether to include additional associated data.
        const {
            details = 'false',
            ...filters
        } = req.query;

        // Call the find function with filters, pagination, and details flag.
        const data = await findById(filters as Record<string, any>, details as string);
        res.json(data);
    } catch (error) {
        console.error('Error fetching regulated entities:', error);
        res.status(500).json({ error: 'Internal Server Error ${error}' });
    }
});

router.get('/O1', async (req: Request, res: Response) => {
    try {
        const data = await O1();
        res.json(data);
    } catch (error) {
        console.error('Error fetching regulated entities:', error);
        res.status(500).json({ error: 'Internal Server Error ${error}' });
    }
});

router.get('/O2', async (req: Request, res: Response) => {
    try {
        const data = await O2();
        res.json(data);
    } catch (error) {
        console.error('Error fetching regulated entities:', error);
        res.status(500).json({ error: 'Internal Server Error ${error}' });
    }
});

export { router as RegulatedEntityRouter };
