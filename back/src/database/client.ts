import { join } from 'path'
import * as Loki from 'lokijs'
import User from 'src/models/user';

// data will be stored inside data.json file
const db: Loki = new Loki(join(__dirname, 'data.json'))
db.autosaveEnable()

/**
 * Inserts some data in the database for testing
 */
db.addCollection('users')
.insert({
  email: 'gusgarzaki@gmail.com',
  password: 'abcxyz'
})

export default db
