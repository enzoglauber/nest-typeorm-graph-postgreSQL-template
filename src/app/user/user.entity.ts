import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { BaseEntity } from '../../common/base/base.entity';
import { hashPasswordTransform } from '../../common/util/cripto';
import { Address } from '../address/address.entity';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @Column()
  public name: string;

  @Field()
  @Column()
  public email: string;

  @Exclude()
  @Field()
  @Column({
    transformer: hashPasswordTransform // só funciona em RDBMS
  })
  public password: string;

  @Field(type =>  Address, { nullable: true })
  @OneToOne(() => Address, (address: Address) => address.user, {
    eager: true, // Força que nossas entidades relacionadas sejam sempre incluídas
    cascade: true // Graças a isso, podemos salvar um endereço enquanto salvamos um usuário.
  })
  @JoinColumn()
  // @JoinColumn()
  public address?: Address;
}
