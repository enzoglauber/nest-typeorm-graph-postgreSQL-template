import { InputType } from '@nestjs/graphql';
import { IsLatitude, IsLongitude, IsNotEmpty, IsString } from 'class-validator';


@InputType()
export class CreatePlaceInput {
  @IsString()
  @IsNotEmpty({ message: 'This place need a name' })
  name: string;

  @IsNotEmpty()
  @IsLatitude()
  lat: number;

  @IsNotEmpty()
  @IsLongitude()
  lng: number;
}
