import { NestFactory } from '@nestjs/core';
import { AppModule } from './App.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule);
  await app.listen();
}
bootstrap();
