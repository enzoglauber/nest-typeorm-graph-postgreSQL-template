import { BaseInput } from '@common/base/base.input';
import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateAddressInput extends BaseInput {
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
