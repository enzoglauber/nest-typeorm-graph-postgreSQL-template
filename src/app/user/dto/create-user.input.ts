import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { CreateAddressInput } from '../../address/dto/create-address.input';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Invalid characters' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Invalid E-mail' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  // @IsNotEmpty({ message: 'Address is required' })
  // @isObject(() => Address)
  @Field({ nullable: true })
  address?: CreateAddressInput;
}
