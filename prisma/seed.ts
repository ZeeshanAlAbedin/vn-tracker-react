import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DIRECT_URL! });
const prisma = new PrismaClient({ adapter });

async function seed() {
  const user1 = await prisma.users.create({
    data: {
      email: 'test1@example.com',
      display_name: 'Test User 1',
      avatar_url: 'https://example.com/avatar1.jpg',
      password_hash: null, // or some hash if needed
      is_auth: false,
    },
  });

  const user2 = await prisma.users.create({
    data: {
      email: 'test2@example.com',
      display_name: 'Test User 2',
      avatar_url: 'https://example.com/avatar2.jpg',
      password_hash: null,
      is_auth: false,
    },
  });

  await prisma.oauth_account.create({
    data: {
      user_id: user1.id,
      provider: 'google',
      provider_acount_id: 'google123',
    },
  });

  await prisma.oauth_account.create({
    data: {
      user_id: user2.id,
      provider: 'github',
      provider_acount_id: 'github456',
    },
  });

  console.log('Seeded 2 test users and their oauth accounts');
}

seed().then( () => prisma.$disconnect());