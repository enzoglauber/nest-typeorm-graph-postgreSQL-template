import { Inject } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { Address } from './address.entity';
import { AddressService } from './address.service';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

@Resolver(() => Address)
export class AddressResolver {
  constructor(
    @Inject(AddressService) private addressService: AddressService,
    @Inject(UserService) private userService: UserService
  ) {}

  @Mutation(() => Address)
  async createAddress(@Args('data') data: CreateAddressInput): Promise<Address> {
    return this.addressService.create(data);
  }

  @Query(() => [Address])
  async addresses(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Query(() => Address)
  async address(@Args('id') id: string): Promise<Address> {
    return this.addressService.findOne(id);
  }

  @Mutation(() => Address)
  async updateAddress(
    @Args('data') data: UpdateAddressInput,
  ): Promise<Address> {
    return this.addressService.update(data);
  }

  @Mutation(() => Boolean)
  async removeAddress(@Args('id') id: string): Promise<true> {
    await this.addressService.remove(id);
    return true;
  }

  @ResolveField(() => User)
  async user(@Parent() address) {
    const { id } = address;
    return this.userService.findByAddress(id);
  }
}
