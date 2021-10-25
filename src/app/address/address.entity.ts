import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne } from 'typeorm';

import { BaseEntity } from '../../common/base/base.entity';
import { User } from '../user/user.entity';

@ObjectType()
@Entity()
export class Address extends BaseEntity {
  @Field()
  @Column()
  public street: string;

  @Field()
  @Column()
  public city: string;

  @Field()
  @Column()
  public country: string;

  @Field(type => User, { nullable: true })
  @OneToOne(() => User, (user: User) => user.address)
  public user: User;
}
