import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.users
        .create({
            data: { name: 'Alice' },
        })
        .then((res) => console.log(`DATA REGISTERED: ${res.id}`));
    await prisma.users
        .create({
            data: { name: 'Bob', deleted: true },
        })
        .then((res) => console.log(`DATA REGISTERED: ${res.id}`));
    await prisma.users
        .create({
            data: { name: 'Catherine' },
        })
        .then((res) => console.log(`DATA REGISTERED: ${res.id}`));
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
