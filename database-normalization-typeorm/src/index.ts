import { AppDataSource } from './data-source';
import { User } from './entity/User';

AppDataSource.initialize()
  .then(async ({ entityMetadatas }) => {
    entityMetadatas.forEach(({ name, columns, foreignKeys }) =>
      console.log({
        name,
        foreignKeys,
        columns: columns.map(({ databaseName, referencedColumn }) => ({
          databaseName,
          referencedColumn,
        })),
      })
    );
  })
  .catch(error => console.log(error));
