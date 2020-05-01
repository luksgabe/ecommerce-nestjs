import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from 'nestjs-dotenv';
const configService: ConfigService = new ConfigService();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: configService.get('TYPEORM_HOST'),
  port: +configService.get('TYPEORM_PORT'),
  database: configService.get('TYPEORM_DATABASE'),
  username: configService.get('TYPEORM_USERNAME'),
  password: configService.get('TYPEORM_PASSWORD'),
  synchronize: false,
  entities: [
    __dirname + '/../../domain/models/*.model{.ts,.js}',
  ],
  migrations: [
    __dirname + '/../migrations/*.ts',
  ]
};
