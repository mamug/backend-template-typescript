import { User } from '../../domains/user';

export interface UserRepository {
    findAll: () => Promise<User[]>;
}
