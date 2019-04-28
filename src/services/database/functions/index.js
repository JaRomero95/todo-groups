import getConnection from '../connection';

async function openTransaction(storeName, writeMode = false) {
  const mode = writeMode ? 'readwrite' : 'readonly';
  const db = await getConnection();

  return db.transaction([storeName], mode).objectStore(storeName);
}

async function find(storeName, id) {
  return new Promise(async (resolve, reject) => {
    const transaction = await openTransaction(storeName);
    const request = transaction.get(id);

    request.onsuccess = event => {
      resolve(event.target.result);
    };

    request.onerror = reject;
  });
}

async function save(storeName, record) {
  return new Promise(async (resolve, reject) => {
    const transaction = await openTransaction(storeName, true);
    const request = transaction.add(record);

    request.onsuccess = async event => {
      const id = event.target.result;
      const saved = await find(storeName, id);
      resolve(saved);
    };

    request.onerror = reject;
  });
}

function repositoryFactory(storeName) {
  return {
    create: group => save(storeName, group),
    find: id => find(storeName, id),
  };
}

export {
  find,
  save,
  repositoryFactory,
};
