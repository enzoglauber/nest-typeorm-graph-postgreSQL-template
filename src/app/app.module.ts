import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import GraphQL from 'src/config/graphql.config';
import typeormConfig from 'src/config/typeorm.config';

import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    GraphQL,
    TypeOrmModule.forRoot(typeormConfig),
    UserModule,
    AddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
