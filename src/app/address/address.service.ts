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
    private readonly addressRepository: Repository<Address>
  ) {}

  async create(data: CreateAddressInput | UpdateUserInput): Promise<Address> {
    return this.addressRepository.save(data);
  }

  async findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  async findOne(id: string): Promise<Address> {
    const entity = await this.addressRepository.findOne({where: {id}});
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
    const deleted = await this.addressRepository.delete({id});
    if (!deleted) {
      throw new InternalServerErrorException();
    }
  }

  async clear(): Promise<true> {
    await this.addressRepository.clear()
    return true;
  }
}
