import { InputType } from '@nestjs/graphql';
import { IsBoolean } from 'class-validator';

@InputType({ isAbstract: true })
export class BaseInput {
  @IsBoolean()
  active?: boolean;

  @IsBoolean()
  archived?: boolean;
}
