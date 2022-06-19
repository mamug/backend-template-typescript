import { Request, Response, Router } from 'express';
import { UserRepository } from '../../../application/repositories/userRepository';
import { UserUsecase } from '../../../application/usecases/userUsecase';
import { UserController } from '../../../interface/controllers/userController';
import { UserRepositoryImpl } from '../../../interface/gateways/userRepositoryImpl';

export const addUserRouter = (router: Router): void => {
    const userRepository: UserRepository = new UserRepositoryImpl();
    const userUsecase: UserUsecase = new UserUsecase(userRepository);
    const userController: UserController = new UserController(userUsecase);

    /* get users */
    router.get('/user', async (req: Request, res: Response) => {
        const result = await userController.getUsers();
        if (result.error) {
            res.status(result.status).send(result.error);
        }
        res.status(result.status).send(result.data);
    });
};
