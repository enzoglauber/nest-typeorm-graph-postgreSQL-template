import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@common/base/base.entity';

@ObjectType()
@Entity()
export class Place extends BaseEntity {
  @Field()
  @Column()
  public name: string;

  @Field()
  @Column({ type: "decimal", precision: 15, scale: 10, nullable: true })
  public lat: number;

  @Field()
  @Column({ type: "decimal", precision: 15, scale: 10, nullable: true })
  public lng: number;

  @Field()
  @Column({ generated: true, select: false })
  public distance: number;
}
