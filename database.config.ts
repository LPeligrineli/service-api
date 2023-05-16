import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

export const databaseConfig = {
  imports: [ConfigModule],
  provide: PrismaClient,
  useFactory: (configService: ConfigService) => {
    const options = {
      datasources: {
        db: {
          url: configService.get<string>('DATABASE_URL'),
        },
      },
    };
    const prisma = new PrismaClient(options);
    prisma.$connect();
    return prisma;
  },
  inject: [ConfigService],
};
