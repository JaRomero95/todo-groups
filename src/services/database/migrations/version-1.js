function createIndex(store, field) {
  store.createIndex(`${field}_idx`, field);
}

function createStore(db, storeName) {
  return db.createObjectStore(storeName, {keyPath: 'id', autoIncrement: true});
}

function createGroupsStore(db) {
  const objectStore = createStore(db, 'groups');
  createIndex(objectStore, 'name');
}

function createTasksStore(db) {
  const objectStore = createStore(db, 'tasks');
  createIndex(objectStore, 'name');
}

function migration(db) {
  createGroupsStore(db);
  createTasksStore(db);
}

export default migration;
