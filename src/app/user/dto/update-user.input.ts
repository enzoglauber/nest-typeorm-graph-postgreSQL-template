import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { BaseInput } from 'src/common/base/base.input';

@InputType()
export class UpdateUserInput extends BaseInput {
  @IsString()
  @IsOptional()
  @IsUUID()
  id?: string;

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
  password?: string;
}
