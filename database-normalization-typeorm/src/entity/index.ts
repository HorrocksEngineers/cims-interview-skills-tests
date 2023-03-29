import { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';
import { User } from './User';

export const entities: BaseDataSourceOptions['entities'] = [User];
