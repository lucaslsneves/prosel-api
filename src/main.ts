import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
    }),
  );
  /*
  const config = new DocumentBuilder()
    .setTitle('Prosel API')
    .setDescription('API do Processo Seletivo INTS')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/prosel-docs', app, document);
  */
  await app.listen(process.env.API_PORT);
}
bootstrap();
