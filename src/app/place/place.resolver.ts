import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePlaceInput } from './dto/create-place.input';
import { SearchPlaceInput } from './dto/search-place.input';


import { Place } from './place.entity';
import { PlaceService } from './place.service';

@Resolver(() => Place)
export class PlaceResolver {
  constructor(
    @Inject(PlaceService) private placeService: PlaceService
  ) {}

  @Mutation(() => Place)
  async insertPlace(@Args('data') data: CreatePlaceInput): Promise<Place> {
    return this.placeService.insert(data);
  }

  @Query(() => [Place])
  async places(
    @Args({
      name: 'data',
      type: () => SearchPlaceInput || null,
      nullable: true
    }) data: SearchPlaceInput,
  ): Promise<any[]> {
    if (data) {
      return this.placeService.search(data);
    } else {
      return this.placeService.find();
    }
  }

  @Query(() => Place)
  async place(@Args('id') id: string): Promise<Place> {
    return this.placeService.findOne(id);
  }

  // @Mutation(() => Place)
  // async updateAddress(
  //   @Args('data') data: UpdateAddressInput,
  // ): Promise<Place> {
  //   return this.placeService.update(data);
  // }

  @Mutation(() => Boolean)
  async removePlace(@Args('id') id: string): Promise<true> {
    await this.placeService.remove(id);
    return true;
  }

  @Mutation(() => Boolean)
  async clearPlace(): Promise<true> {
    return this.placeService.clear();
  }


  @Mutation(() => [Place])
  async seedPlace(): Promise<Place[]> {
    const data = [
      {name: "Bjelisi", lat: 42.10083, lng: 19.10417},
      {name: "Topolica", lat: 42.09833, lng: 19.09417},
      {name: "Bar", lat: 42.0937, lng: 19.09841},
      {name: "King Nikola's Palace", lat: 42.10062, lng: 19.09129},
      {name: "Princess", lat: 42.10158, lng: 19.09132},
      {name: "Bar Port", lat: 42.09701, lng: 19.09132},
      {name: "Castello", lat: 42.10701, lng: 19.09623},
      {name: "Popovici", lat: 42.09194, lng: 19.10528},
      {name: "Antivari Pier (historical)", lat: 42.09708, lng: 19.08834},
      {name: "Rikavac ", lat: 42.09278, lng: 19.08972}
    ]

    return this.placeService.create(data);
  }
}
