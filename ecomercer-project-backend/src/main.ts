import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/modules/app.module';
import { ConfigService } from 'nestjs-dotenv';
import { automapper } from './';
const configService: ConfigService = new ConfigService();

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix('api');

  automapper.initialize(configFunction: (config: IConfiguration) => void): void;
  automapper.createMap(sourceKey: string, destinationKey: string);
  automapper.map(sourceKey: string, destinationKey: string, sourceObject: any);

  const PORT = configService.get('EXPRESS_PORT');

  await app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
  });
}
bootstrap();
