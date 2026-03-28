import mongoose from 'mongoose'
import { Product as productModel } from '../../models'
import { getProductData } from '../data/product.data'

export const seedProducts = async (
  catMap: Record<string, mongoose.Types.ObjectId>
): Promise<void> => {
  await productModel.deleteMany({})

  const inserted = await productModel.insertMany(getProductData(catMap))
  console.log(`  ✅ Inserted ${inserted.length} products`)
}
