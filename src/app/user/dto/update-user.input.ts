import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateAddressInput } from 'src/app/address/dto/create-address.input';
import { BaseInput } from 'src/common/base/base.input';

@InputType()
export class UpdateUserInput extends BaseInput {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Invalid characters' })
  name?: string;

  @IsOptional()
  @IsEmail()
  @IsNotEmpty({ message: 'Invalid E-mail' })
  email?: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @Field({ nullable: true })
  address?: CreateAddressInput;
}
