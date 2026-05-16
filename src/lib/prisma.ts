import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export async function deleteTask(id: number) {
  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}

export async function toggleTask(
  id: number,

  completed: boolean,
) {
  await prisma.task.update({
    where: {
      id,
    },

    data: {
      completed: !completed,
    },
  });

  revalidatePath("/");
}

export async function updateTask(id: number, title: string) {
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });

  revalidatePath("/");
}