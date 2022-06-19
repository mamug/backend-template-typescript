import { Request, Response, Router } from 'express';
import { addUserRouter } from './userRouter';

const router = Router();

addUserRouter(router);

/* health check */
router.get('/health', (req: Request, res: Response) => {
    res.send('Health.');
});

export { router};