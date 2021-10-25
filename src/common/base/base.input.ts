import { InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType({ isAbstract: true })
export class BaseInput {
  @IsString()
  @IsUUID()
  @IsNotEmpty({ message: 'uuid is required' })
  id: string;

  @IsBoolean()
  active?: boolean;

  @IsBoolean()
  archived?: boolean;
}
