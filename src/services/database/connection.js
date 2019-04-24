import config from './config';
import schema from './schema';

const connection = indexedDB.open(config.databaseName, config.databaseVersion);

connection.onupgradeneeded = event => {
  console.warn('--- onupgradeneeded ---');
  console.log(event);
  const {oldVersion, newVersion} = event;
  schema.runMigrations(oldVersion, newVersion);
};

connection.onerror = event => {
  console.warn('--- onerror ---');
  console.log(event);
};

connection.onsuccess = event => {
  console.warn('--- onsuccess ---');
  console.log(event);
};
