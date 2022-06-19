import { GetUserOutputData } from '../../application/outputData/userOutputData';
import { UserUsecase } from '../../application/usecases/userUsecase';
import { Response } from './messages';

export class UserController {
    private userUsecase: UserUsecase;

    constructor(userUsecase: UserUsecase) {
        this.userUsecase = userUsecase;
    }

    getUsers = async (): Promise<Response<GetUserOutputData[]>> => {
        try {
            const result = await this.userUsecase.getUsers();
            return { status: 200, data: result };
        } catch (e: any) {
            if (e.status) {
                return { status: e.status, error: e.message };
            } else {
                console.error(e);
                return { status: 500, error: 'Unexcepted Error' };
            }
        }
    };
}
