import express, { Request, Response } from 'express';
import { find } from '../repository/covidData';
import { IPaginationOpts } from '../interface/request';
import { where } from 'sequelize';

const router = express.Router();

router.get('/find', async (req: Request, res: Response) => {
    try {
        const { page = '1', pageSize = '10', ...filters } = req.query;

        const pagination: IPaginationOpts = {
            pageSize: parseInt(pageSize as string, 10),
            offset: (parseInt(page as string, 10) - 1) * parseInt(pageSize as string, 10),
        };
        const data = await find(filters as Record<string, any>, pagination);
        res.json(data);
    } catch (error) {
        console.error('Error fetching CovidData:', error);
        res.status(500).json({ error: error });
    }
});


export { router as CovidDataRouter };