import getConnection from '../connection';

async function openTransaction(storeName, writeMode = false) {
  const mode = writeMode ? 'readwrite' : 'readonly';
  const db = await getConnection();
  return db.transaction([storeName]).objectStore(storeName);
}

async function find(storeName, id) {
  return new Promise(async (resolve, reject) => {
    const request = await openTransaction(storeName).get(id);

    request.onsuccess = event => {
      resolve(true);
    };
    request.onerror = reject;
  });
}

async function save(storeName, record) {
  const db = await getConnection();

  return new Promise((resolve, reject) => {
    const store = db.transaction([storeName], 'readwrite').objectStore(storeName);
    const request = store.add(record);

    request.onsuccess = async event => {
      const id = event.target.result;
      const saved = await find(storeName, id);
      resolve(saved);
    };

    request.onerror = reject;
  });
}

export {
  find,
  save,
};
