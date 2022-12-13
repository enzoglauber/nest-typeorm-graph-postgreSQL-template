import { BaseInput } from '@common/base/base.input';
import { InputType } from '@nestjs/graphql';
import { IsLatitude, IsLongitude, IsNotEmpty, IsOptional, IsString } from 'class-validator';


@InputType()
export class UpdatePlaceInput extends BaseInput {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'This place need a name' })
  name: string;

  @IsOptional()
  @IsLatitude()
  @IsNotEmpty()
  lat: string;

  @IsOptional()
  @IsLongitude()
  @IsNotEmpty()
  lng: string;
}
