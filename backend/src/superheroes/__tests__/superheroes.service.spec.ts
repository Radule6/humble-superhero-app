import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from '../superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Test if the superhero is being created', () => {
    const superhero = service.create({
      name: 'Superman',
      superpower: 'Super Strength',
      humilityScore: 10,
    });

    expect(superhero).toHaveProperty('id');
    expect(superhero.name).toBe('Superman');
    expect(superhero.superpower).toBe('Super Strength');
    expect(superhero.humilityScore).toBe(10);
  });

  //This test checks the GET  /superheroes route
  it('Should return all superheroes sort by humility score', () => {
    const superhero = service.create({
      name: 'Superman',
      superpower: 'Super Strength',
      humilityScore: 10,
    });

    const superhero2 = service.create({
      name: 'Batman',
      superpower: 'Rich',
      humilityScore: 8,
    });

    const superhero3 = service.create({
      name: 'Flash',
      superpower: 'Speed',
      humilityScore: 5,
    });

    const superheroes = service.findAll();

    expect(superheroes).toEqual([superhero, superhero2, superhero3]);
  });
});
