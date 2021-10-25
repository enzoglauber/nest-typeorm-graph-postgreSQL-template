import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateUserInput } from '../user/dto/update-user.input';
import { Address } from './address.entity';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

@Injectable()
export class AddressService {
   constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    // private readonly userService: UserService
  ) {}

  async create(data: CreateAddressInput | UpdateUserInput): Promise<Address> {
    return this.addressRepository.save(data);
  }

  async findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  async findOne(id: string): Promise<Address> {
    const entity = await this.addressRepository.findOne(id);
    if (!entity) {
      throw new NotFoundException('Address not found');
    }
    return entity;
  }

  async update(data: UpdateAddressInput): Promise<Address> {
    const entity = await this.findOne(data.id);
    return this.addressRepository.save({ ...entity, ...data });
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    const deleted = await this.addressRepository.delete(entity);
    if (!deleted) {
      throw new InternalServerErrorException();
    }
  }

  // async findAllWithUsers(): Promise<Address[]> {
  //   return this.addressRepository.find({ relations: ['user'] });
  // }
  // async find(data: any): Promise<User>{
  //   return this.userService.find(data);
  // }
}