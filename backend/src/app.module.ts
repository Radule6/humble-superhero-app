import { Module } from '@nestjs/common';
import { SuperheroesModule } from './superheroes/superheroes.module';

/**
 * Main module for the superheroes API
 */
@Module({
  imports: [SuperheroesModule],
})
export class AppModule {}
