import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AddressService } from '../address/address.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly addressService: AddressService
  ) {}

  async createUser(user: CreateUserInput): Promise<User> {
    const address = await this.addressService.create(user.address);
    user.address = address;
    return this.userRepository.save(user);
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({where: {email}});
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async updateUser(data: UpdateUserInput): Promise<User> {
    console.log('data', data);
    const user = await this.getUserById(data.id);
    const address = await this.addressService.update(data.address);
    user.address = address;
    return this.userRepository.save({ ...user, ...data });
  }

  async clear(): Promise<true> {
    await this.userRepository.clear()
    return true;
  }

  async deleteUser(id: string): Promise<void> {
    const user = await this.getUserById(id);
    const userDeleted = await this.userRepository.delete(user);
    if (!userDeleted) {
      throw new InternalServerErrorException();
    }
  }

  async findByAddress(id: string): Promise<User>{
    return this.userRepository.findOne({
      address: {id}
    });

    // return this.userRepository
    //   .createQueryBuilder("user")
    //   .where("addressid = :id", { id })
    //   .getOne();
  }

  async find(data: any): Promise<User>{
    return this.userRepository.findOne(data);
  }
}
