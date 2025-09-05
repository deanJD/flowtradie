import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.task.deleteMany()
  await prisma.trade.deleteMany()
  await prisma.project.deleteMany()

  // 1️⃣ Create the project first
  const project = await prisma.project.create({
    data: {
      name: 'Office Renovation',
      startDate: new Date(),
      endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
    }
  })

  // 2️⃣ Create trades with nested tasks (Prisma infers projectId here)
  await prisma.trade.createMany({
    data: [
      { name: 'Electrical', license: 'ELEC-1234', projectId: project.id },
      { name: 'Plumbing', license: 'PLUMB-5678', projectId: project.id }
    ]
  })

  // 3️⃣ Create standalone project tasks (must set projectId explicitly)
  await prisma.task.createMany({
    data: [
      { title: 'Site inspection', status: 'COMPLETED', projectId: project.id },
      { title: 'Order materials', status: 'PENDING', projectId: project.id }
    ]
  })
}

main()
  .then(() => console.log('✅ Database seeded with demo data'))
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })