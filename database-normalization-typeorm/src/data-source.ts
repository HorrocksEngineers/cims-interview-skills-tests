import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { entities } from './entity';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  username: 'sa',
  password: 'Admin12345',
  database: 'tempdb',
  synchronize: true,
  logging: false,
  entities,
  migrations: [],
  subscribers: [],
});
