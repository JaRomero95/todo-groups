import migrations from './migrations';

function applySchema(connectionEvent) {
  const {oldVersion, newVersion, target: {result: db}} = connectionEvent;

  let nextVersion = oldVersion + 1;

  while (nextVersion <= newVersion) {
    applyMigration(db, nextVersion);
    nextVersion++;
  }
}

function applyMigration(db, version) {
  const migration = getMigration(version);
  migration(db);
}

function getMigration(version) {
  const versionIndex = version - 1;
  return migrations[versionIndex];
}

export default applySchema;
