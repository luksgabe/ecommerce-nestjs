import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/modules/app.module';
import { ConfigService } from 'nestjs-dotenv';
const configService: ConfigService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = configService.get('EXPRESS_PORT');
  
  await app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
  });
}
bootstrap();
