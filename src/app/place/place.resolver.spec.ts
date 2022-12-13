import { Test, TestingModule } from '@nestjs/testing';
import { PlaceResolver } from './place.resolver';

describe('PlaceResolver', () => {
  let resolver: PlaceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceResolver],
    }).compile();

    resolver = module.get<PlaceResolver>(PlaceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
