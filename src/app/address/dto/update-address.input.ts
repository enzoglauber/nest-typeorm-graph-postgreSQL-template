import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { BaseEntity } from '../../../common/base/base.entity';

@InputType()
export class UpdateAddressInput extends BaseEntity {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Street is required' })
  street?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'City is required' })
  city?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Country is required' })
  country?: string;
}
