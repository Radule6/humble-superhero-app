import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from '../superheroes.controller';
import { SuperheroesService } from '../superheroes.service';
import { BadRequestException, INestApplication, ValidationPipe } from '@nestjs/common';
import { CreateSuperheroDto } from '../dto/create-superhero.dto';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let app: INestApplication;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    controller = module.get<SuperheroesController>(SuperheroesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  it('Test if the superhero is being created', () => {
    const superhero = controller.create({
      name: 'Superman',
      superpower: 'Super Strength',
      humilityScore: 10,
    })

    expect(superhero).toHaveProperty('id');
    expect(superhero.name).toBe('Superman');
    expect(superhero.superpower).toBe('Super Strength');
    expect(superhero.humilityScore).toBe(10);
  })

  //This test checks if the superheroes are returned
  it('Return all superheroes', () => {
    const superhero = controller.create({
      name: 'Superman',
      superpower: 'Super Strength',
      humilityScore: 10,
    })

    const superhero2 = controller.create({
      name: 'Batman',
      superpower: 'Super Strength',
      humilityScore: 10,
    })

    expect(controller.findAll()).toEqual([superhero, superhero2]);

  })

  //This test checks if the superheroes are sorted by humility score
  it('Return all superheroes sorted by humility score', () => {
    const superhero = controller.create({
      name: 'Superman',
      superpower: 'Super Strength',
      humilityScore: 10,
    })

    const superhero2 = controller.create({
      name: 'Batman',
      superpower: 'Rich',
      humilityScore: 8,
    })

    const superhero3 = controller.create({
      name: 'Flash',
      superpower: 'Speed',
      humilityScore: 5,
    })
    expect(controller.findAll()).toEqual([superhero, superhero2, superhero3]);
  })

  //This test checks if the validation pipe is working
  it('Disallow creating a superhero with a negative humility score', async () => {
    const validationPipe = new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true, exceptionFactory: (errors) => {
      const messages = errors.map(
        err => `${err.property} ${Object.values(err.constraints ?? {}).join(', ')}`
      );
      return new BadRequestException(messages);
    }});
    await expect(
      validationPipe.transform(
        {
          name: 'Not Humble Hero',
          superpower: 'Super Strength',
          humilityScore: -10,
        },
        { type: 'body', metatype: CreateSuperheroDto }
      )
    ).rejects.toThrow(
      new BadRequestException(['humilityScore must not be less than 1'])
    );
  });
});
