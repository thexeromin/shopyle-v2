import { User as userModel } from '../../models'
import { userData } from '../data/user.data'

export const seedUsers = async (): Promise<void> => {
  await userModel.deleteMany({})
  const inserted = await userModel.insertMany(userData)
  console.log(`  ✅ Inserted ${inserted.length} users`)
}
