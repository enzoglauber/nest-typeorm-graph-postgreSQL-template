import { log } from 'console';
import { ConnectionOptions } from 'typeorm';

import configService from './config.service';

const typeormConfig = configService.getTypeOrmConfig() as ConnectionOptions;
log(typeormConfig)
export default typeormConfig;
