import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/modules/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  await app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
  });


}
bootstrap();
