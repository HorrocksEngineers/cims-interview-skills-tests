import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(async ({ entityMetadatas }) => {
    entityMetadatas.forEach(({ name, columns, foreignKeys }) =>
      console.log({
        name,
        foreignKeys,
        columns: columns.map(({ databaseName, referencedColumn, type }) => ({
          databaseName,
          referencedColumn,
          type,
        })),
      })
    );
  })
  .catch(error => console.log(error));
