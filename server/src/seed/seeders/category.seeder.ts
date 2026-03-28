import mongoose from 'mongoose'
import { Category as categoryModel } from '../../models'
import { categoryData } from '../data/category.data'

export const seedCategories = async (): Promise<
  Record<string, mongoose.Types.ObjectId>
> => {
  await categoryModel.deleteMany({})

  const inserted = await categoryModel.insertMany(categoryData)
  console.log(`  ✅ Inserted ${inserted.length} categories`)

  // Return a name → _id map so product seeder can reference categories
  const catMap: Record<string, mongoose.Types.ObjectId> = {}
  inserted.forEach((c) => {
    catMap[c.name] = c._id as mongoose.Types.ObjectId
  })

  return catMap
}
