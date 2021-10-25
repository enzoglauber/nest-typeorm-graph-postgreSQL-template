import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAddressInput {
  @IsString()
  @IsNotEmpty({ message: 'Street is required' })
  street: string;

  @IsString()
  @IsNotEmpty({ message: 'City is required' })
  city: string;

  @IsString()
  @IsNotEmpty({ message: 'Country is required' })
  country: string;
}
