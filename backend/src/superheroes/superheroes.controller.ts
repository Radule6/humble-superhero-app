import { Controller, Post, Body, Get } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Superhero } from './superheroes.service';

/**
 * Controller for managing superheroes
 */
@Controller('superheroes')
export class SuperheroesController {
  /**
   * Constructor for the SuperheroesController
   * @param superheroesService - The service for managing superheroes
   */
  constructor(private readonly superheroesService: SuperheroesService) {}

  /**
   * Create a new superhero
   * @param createSuperheroDto - The DTO containing superhero details
   * @returns The created superhero
   */
  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto): Superhero {
    return this.superheroesService.create(createSuperheroDto);
  }

  /**
   * Get all superheroes
   * @returns An array of superheroes
   */
  @Get()
  findAll() {
    return this.superheroesService.findAll();
  }
}
