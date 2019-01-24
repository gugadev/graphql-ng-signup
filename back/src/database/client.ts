import * as Loki from 'lokijs'
import initializeDb from './bootstrap'

const db: Loki = new Loki('data.json')
initializeDb(db)

export default db
