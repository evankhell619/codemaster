import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import prisma from "../app/prisma.js";

const bcryptRound = 4;

async function main() {
  await prisma.user.deleteMany();
  const roles = await prisma.role.findMany();
  for (let i = 1; i <= 5; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email().toLocaleLowerCase(),
        name: faker.person.fullName(),
        password: bcrypt.hashSync(`password`, bcryptRound),
        role_id: roles[Math.floor(Math.random() * roles.length)].id,
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
