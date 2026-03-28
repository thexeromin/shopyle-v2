import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { seedCategories } from './seeders/category.seeder'
import { seedProducts } from './seeders/product.seeder'
import { seedUsers } from './seeders/user.seeder'

dotenv.config()

const MONGO_URI = process.env.DATABASE || ''

export const runSeeders = async (): Promise<void> => {
  await mongoose.connect(MONGO_URI)
  console.log('✅ Connected to MongoDB\n')

  console.log('📦 Seeding categories...')
  const catMap = await seedCategories()

  console.log('📦 Seeding products...')
  await seedProducts(catMap)

  console.log('📦 Seeding users...')
  await seedUsers()

  console.log('\n🎉 All seeders complete!')
  await mongoose.disconnect()
}
