import { PrismaClient } from '@prisma/client';
import { UserRepository } from '../../application/repositories/userRepository';
import { User } from '../../domains/user';
import { InternalServerError } from '../../utils/error';

export class UserRepositoryImpl implements UserRepository {
    private readonly prisma = new PrismaClient();

    findAll = async (): Promise<User[]> => {
        try {
            return (
                await this.prisma.users.findMany({ where: { deleted: false } })
            ).map((user) => new User(user.id, user.name, user.deleted));
        } catch (e) {
            console.error(e);
            throw new InternalServerError('Database Error');
        }
    };
}
