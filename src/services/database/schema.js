import migrations from './migrations';

function Schema() {
  function runMigrations(oldVersion, newVersion) {
    let nextVersion = oldVersion + 1;

    while (nextVersion <= newVersion) {
      applyMigration(nextVersion);
      nextVersion++;
    }
  }

  function applyMigration(version) {
    const migration = getMigration(version);
    migration();
  }

  function getMigration(version) {
    const m = migrations;
    debugger;
    return migrations[version];
  }

  return {
    runMigrations,
  };
}

const instance = new Schema();

export default instance;
