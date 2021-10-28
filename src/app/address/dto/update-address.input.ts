import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseInput } from 'src/common/base/base.input';

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
