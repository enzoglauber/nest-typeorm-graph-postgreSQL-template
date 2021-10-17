import { ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entity/base.entity';
import { hashPasswordTransform } from 'src/common/util/cripto';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column({
    transformer: hashPasswordTransform // só funciona em RDBMS – relational database management systems
  })
  password: string;
}

export default User;
