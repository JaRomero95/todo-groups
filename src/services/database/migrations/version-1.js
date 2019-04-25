export default function (db) {
  console.log('run migration 1');
  const objectStore = db.createObjectStore('groups', {keyPath: 'id', autoIncrement: true});
  objectStore.createIndex('name_idx', 'name');
  console.log(db);
}
