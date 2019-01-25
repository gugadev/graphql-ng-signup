import * as Loki from 'lokijs'

const db: Loki = new Loki('data.json')
db.addCollection('users')

export default db
