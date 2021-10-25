import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../user/user.module';
import { Address } from './address.entity';
import { AddressResolver } from './address.resolver';
import { AddressService } from './address.service';

@Module({
  imports: [forwardRef(() => UserModule), TypeOrmModule.forFeature([Address])],
  providers: [AddressResolver, AddressService],
  exports: [AddressService]
})
export class AddressModule {}
