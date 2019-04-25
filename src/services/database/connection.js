import config from './config';
import applySchema from './schema';

const {databaseName, databaseVersion} = config;
const connection = indexedDB.open(databaseName, databaseVersion);

connection.onupgradeneeded = applySchema;

connection.onerror = event => {
  console.warn('--- onerror ---');
  console.log(event);
};

connection.onsuccess = event => {
  console.warn('--- onsuccess ---');
  console.log(event);
  console.log('connection :', connection);
};
