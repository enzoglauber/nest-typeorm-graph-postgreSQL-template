import { InputType } from '@nestjs/graphql';
import { IsLatitude, IsLongitude, IsNotEmpty, IsString } from 'class-validator';


@InputType()
export class  SearchPlaceInput {
  @IsNotEmpty()
  @IsString()
  range: number;

  @IsNotEmpty()
  @IsLatitude()
  lat: number;

  @IsNotEmpty()
  @IsLongitude()
  lng: number;
}
