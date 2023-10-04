import { DataSource } from 'typeorm';
import configService from './config.service';

const config = configService.getTypeOrmConfig();
export const AppDataSource = new DataSource(config);
