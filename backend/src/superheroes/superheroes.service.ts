import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';


/**
 * Superhero interface
 */
export interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}

/**
 * Service for managing superheroes
 */
@Injectable()
export class SuperheroesService {
  // In-memory array to store superheroes
  private superheroes: Superhero[] = [];

  /**
   * Create a new superhero
   * @param createSuperheroDto - The DTO containing superhero details
   * @returns The created superhero
   * @throws BadRequestException if a superhero with the same name already exists
   */
  create(createSuperheroDto: CreateSuperheroDto): Superhero {
    if (this.superheroes.find((superhero) => superhero.name === createSuperheroDto.name)) {
      throw new BadRequestException('Superhero with this name already exists');
    }

    const superhero: Superhero = {
      id: this.superheroes.length + 1,
      ...createSuperheroDto,
    };

    this.superheroes.push(superhero);
    return superhero;
  }

  /**
   * Get all superheroes sorted by humility score
   * @returns An array of superheroes sorted by humility score
   */
  findAll(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  };
};
