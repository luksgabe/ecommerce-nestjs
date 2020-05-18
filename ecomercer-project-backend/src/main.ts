import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/modules/app.module';
import { ConfigService } from 'nestjs-dotenv';
import { AutoMapperConfig } from './app/automapper';

const configService: ConfigService = new ConfigService();

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix('api');

  initiateAppConfig();

  const PORT = configService.get('EXPRESS_PORT');

  await app.listen(PORT, () => {
    '';
    console.log(`Servidor iniciado na porta ${PORT}`);
  });
}

const initiateAppConfig = () => {
  AutoMapperConfig.mapperList;
};

bootstrap();
