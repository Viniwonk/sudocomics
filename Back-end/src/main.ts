import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API SudoComics')
    .setDescription(
      'API para gerenciar os dados de quadrinhos e usuários do SudoComics',
    )
    .setVersion('1.0')
    .addTag('Quadrinhos')
    .addTag('Usuários')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // Middleware global para garantir resposta JSON
  app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
  });
  app.use(cors());

  await app.listen(3001);
}

bootstrap();
