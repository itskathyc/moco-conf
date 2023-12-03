import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { winstonLogger } from './common/winston.util';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    logger:winstonLogger
  });
  await app.listen(3000);
  console.log("yarn 시작")
}
bootstrap();
