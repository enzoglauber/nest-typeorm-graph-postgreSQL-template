// import { TypeOrmModule } from '@nestjs/typeorm';
// import { log } from 'console';
import { log } from 'console';
import { ConnectionOptions } from 'typeorm';

import configService from './config.service';


// const TypeOrm = TypeOrmModule.forRoot(configService.getTypeOrmConfig());

// log('configService.getTypeOrmConfig ', configService.getTypeOrmConfig())

// export default TypeOrm;



// import * as dotenv from 'dotenv';
// dotenv.config(); // very very important!!
const typeormConfig = configService.getTypeOrmConfig() as ConnectionOptions;
log(typeormConfig)
export default typeormConfig;
