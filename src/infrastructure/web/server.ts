import express from 'express';
import { router } from './routers/router';

const app = express();
app.use(express.json());
app.disable('x-powered-by');

app.use('/api', router);
app.listen(8080, async () => {});

export default app;
