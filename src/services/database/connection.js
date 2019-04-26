import config from './config';
import applySchema from './schema';

let database;

function handleConnection(resolve, reject) {
  if (database) {
    resolve(database);
    return;
  }

  const {databaseName, databaseVersion} = config;
  const connection = indexedDB.open(databaseName, databaseVersion);

  connection.onupgradeneeded = applySchema;

  connection.onerror = reject; // TODO: notify errors to user

  connection.onsuccess = event => {
    database = event.target.result;
    resolve(database);
  };
}

function getConnection() {
  return new Promise(handleConnection);
}

export default getConnection;
