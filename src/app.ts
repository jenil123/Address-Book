import express from 'express';
import { Server } from 'http';
import routes from './routes';
export class App {
    public app: express.Application;

    public server?: Server;


    constructor() {
        this.app = express();
        this.app.set('trust proxy', 2);
        this.app.use(express.json({ type: '*/json' }));
        this.app.use(express.text());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.set('view engine', 'html');
        this.app.use('/api/v1', routes);

        this.app.disable('x-powered-by');
    }

    public start(): void {
        this.server = this.app.listen('9099', () => {
            console.log(`server started on port 9099`);
        });
        this.server.keepAliveTimeout = 120000;
    }

    public stop(): void {
        this.server.close();
    }
}