import { ConnectionOptions } from 'typeorm';

import configService from './config.service';

const typeormConfig = configService.getTypeOrmConfig() as ConnectionOptions;
export default typeormConfig;
