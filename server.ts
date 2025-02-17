import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db';
import { attachmentsRouter } from './routes/attachments.routes';
import { contactsRouter } from './routes/contacts.routes';
import { CovidDataRouter } from './routes/covidData.routes';
import { RegulatedEntityRouter } from './routes/regulatedEntity.routes';

dotenv.config();
const app = express();
app.use(express.json());

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Database connection successful.');

        app.listen(3000, () => {
            console.log('Server running on http://localhost:3000');
        });
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

app.use('/attachments', attachmentsRouter);
app.use('/contacts', contactsRouter);
app.use('/covidData', CovidDataRouter);
app.use('/regulatedEntity', RegulatedEntityRouter);
startServer();