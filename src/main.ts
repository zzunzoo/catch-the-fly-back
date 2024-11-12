import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'localhost:3000',
      'https://port-next-catch-the-fly-front-m3ecukr559d1a7ca.sel4.cloudtype.app',
    ],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 6000);
}
bootstrap();
