import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

require('dotenv').config();

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string): string {
    return this.env[key] || '';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: '127.0.0.1',
      username: this.getValue('DB_USERNAME'),
      password: this.getValue('DB_PASSWORD'),
      database: this.getValue('DB_NAME'),
      entities: [join(__dirname, '..', 'app', '**', '*.entity.{ts,js}')],
      migrationsTableName: 'migration',
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      // migrations: [
      //   "./src/app/database/migrations/**.ts"
      // ],
      // migrations: [join(__dirname, 'migrations', 'migrations', 'migrations', '*.ts')],
      cli: {
        migrationsDir: './src/app/database/migrations',
      },
      synchronize: this.getValue('DB_SYNC') == 'true',
      // ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env);

export default configService;
