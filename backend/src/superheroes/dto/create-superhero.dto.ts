import { IsString, IsNumber, Min, Max, Length } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  @Length(4, 50)
  name: string;

  @IsString()
  @Length(4, 100)
  superpower: string;

  @IsNumber()
  @Min(1)
  @Max(10)
  humilityScore: number;
}