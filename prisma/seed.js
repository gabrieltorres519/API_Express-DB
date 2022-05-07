const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const commander = await prisma.commander.upsert({
      where: { name: 'commander' },
      update: {},
      create: {
        name: 'Commander',
				lang: 'lang',
				missionCommander: 'Node',
        enrollments: 0,
        hasCertification: true
      },
    });

    const commander1 = await prisma.commander.upsert({
      where: { name: 'commander1' },
      update: {},
      create: {
        name: 'Commander1',
				lang: 'lang1',
				missionCommander: 'Node',
        enrollments: 1,
        hasCertification: true
      },
    });

    const commander2 = await prisma.commander.upsert({
      where: { name: 'commander 2' },
      update: {},
      create: {
        name: 'Commander 2',
				lang: 'lang2',
				missionCommander: 'Java',
        enrollments: 2,
        hasCertification: false
      },
    });

    const commander3 = await prisma.commander.upsert({
      where: { name: 'commander 3' },
      update: {},
      create: {
        name: 'Commander 3',
				lang: 'lang3',
				missionCommander: 'Node',
        enrollments: 3,
        hasCertification: true
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }


})();