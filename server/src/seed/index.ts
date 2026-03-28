import { runSeeders } from './runner'

runSeeders().catch((err) => {
  console.error('❌ Seeding failed:', err)
  process.exit(1)
})
