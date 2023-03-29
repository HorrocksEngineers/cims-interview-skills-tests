import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(async ({ entityMetadatas }) =>
    console.log(entityMetadatas.map(({ name }) => name))
  )
  .catch(error => console.log(error));
