export default (db: Loki) => {
  db.removeCollection('users') // clear database
  db.addCollection('users') // creates the users collection
}
