import { Field, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType({ isAbstract: true })
export class BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Field()
  @Column({ type: 'boolean', default: false })
  archived: boolean;

  @Field()
  @Column()
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  // @Column({ type: 'varchar', length: 300 })
  // createdBy: string;

  @Field()
  @Column()
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  // @Column({ type: 'varchar', length: 300 })
  // updatedBy: string;
}
