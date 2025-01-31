import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

/*
  This is the main file for the backend of the Humble Superhero App.
  It is responsible for starting the NestJS application and configuring it.
*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        const messages = errors.map(
          (err) =>
            `${err.property} ${Object.values(err.constraints ?? {}).join(', ')}`,
        );
        return new BadRequestException(messages);
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});
