import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();

// Since nextjs has hot reloading, we need to check if prisma is already defined
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prismadb;
}

export default prismadb;
