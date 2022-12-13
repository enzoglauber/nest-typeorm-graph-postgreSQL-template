import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne } from 'typeorm';

import { BaseEntity } from '@common/base/base.entity';
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

// https://github.com/typeorm/typeorm/blob/master/docs/decorator-reference.md#column
// spatialFeatureType: string - Optional feature type (Point, Polygon, LineString, Geometry) used as a constraint on a spatial column. If not specified, it will behave as though Geometry was provided. Used only in PostgreSQL.
// srid: number - Optional Spatial Reference ID used as a constraint on a spatial column. If not specified, it will default to 0. Standard geographic coordinates (latitude/longitude in the WGS84 datum) correspond to EPSG 4326. Used only in PostgreSQL.
