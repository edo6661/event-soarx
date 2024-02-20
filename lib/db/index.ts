import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// ! ga di production karena di production kita ga pakai hot reload
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
