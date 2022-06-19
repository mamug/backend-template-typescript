import { GetUserOutputData } from '../outputData/userOutputData';
import { UserRepository } from '../repositories/userRepository';

export class UserUsecase {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    getUsers = async (): Promise<GetUserOutputData[]> => {
        const result = await this.userRepository.findAll();
        const users: GetUserOutputData[] = [];
        for (let user of result) {
            users.push({ id: user.id, name: user.name });
        }
        return users;
    };
}
