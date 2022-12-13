import { Field, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity as Base,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@ObjectType({ isAbstract: true })
export class BaseEntity extends Base {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Field()
  @Column({ type: 'boolean', nullable: true, default: false })
  archived: boolean;

  @Field()
  @CreateDateColumn({ type: 'timestamptz', default: 'NOW()' })
  createdAt: Date;

  // @Column({ type: 'varchar', length: 300 })
  // createdBy: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamptz', default: 'NOW()' })
  updatedAt: Date;

  // @Column({ type: 'varchar', length: 300 })
  // updatedBy: string;
}
