import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, DeepPartial, Repository } from 'typeorm';

import { CreatePlaceInput } from './dto/create-place.input';
import { SearchPlaceInput } from './dto/search-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { Place } from './place.entity';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
    private connection: Connection,
  ) {}

  async insert(data: CreatePlaceInput | UpdatePlaceInput): Promise<Place> {
    const formatted = this.casting(data);
    return this.placeRepository.save({...data, ...formatted});
  }

  async create(data: DeepPartial<Place>[]): Promise<Place[]> {
    const entities = this.placeRepository.create(data);
    await this.placeRepository.insert(entities);
    return entities;
  }

  async find(): Promise<Place[]> {
    return this.placeRepository.find();
  }

  async findOne(id: string): Promise<Place> {
    const entity = await this.placeRepository.findOne(id);
    if (!entity) {
      throw new NotFoundException('Place not found');
    }
    return entity;
  }

  async update(data: UpdatePlaceInput): Promise<Place> {
    const entity = await this.findOne(data.id);
    const formatted = this.casting(data);
    return this.placeRepository.save({ ...entity, ...formatted });
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    const deleted = await this.placeRepository.delete(entity);
    if (!deleted) {
      throw new InternalServerErrorException();
    }
  }

  async clear(): Promise<true> {
    await this.placeRepository.clear()
    return true;
  }

  async search(data: SearchPlaceInput) {
    const sql = `
      SELECT
        plc.id AS id,
        plc.name AS name,
        plc.lat AS lat,
        plc.lng AS lng,
        (ROUND(earth_distance(ll_to_earth($1, $2), ll_to_earth(plc.lat, plc.lng))::NUMERIC, 2)/1000) AS distance
      FROM place AS plc
      WHERE (earth_box(ll_to_earth ($1, $2), $3) @> ll_to_earth (plc.lat, plc.lng) AND earth_distance(ll_to_earth ($1, $2), ll_to_earth (plc.lat, plc.lng)) < $3)
      ORDER BY distance
    `;

    const lng = parseFloat(data.lng);
    const lat = parseFloat(data.lat);
    const range = parseInt(data.range) * 1000;

    return this.connection.query(sql, [lat, lng, range]);
  }

  private casting = (data: UpdatePlaceInput | CreatePlaceInput) => {
    const formatted = {
      lat: parseFloat(data.lat),
      lng: parseFloat(data.lng)
    }

    return formatted
  }
}
