import { InputType } from '@nestjs/graphql';
import { IsLatitude, IsLongitude, IsNotEmpty, IsString } from 'class-validator';


@InputType()
export class  SearchPlaceInput {
  @IsNotEmpty()
  @IsString()
  range: string;

  @IsNotEmpty()
  @IsLatitude()
  lat: string;

  @IsNotEmpty()
  @IsLongitude()
  lng: string;
}
