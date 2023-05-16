import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ServiceController } from './controllers/service.controller';
import { ServiceService } from './services/service.service';

@Module({
  imports: [],
  controllers: [ServiceController],
  providers: [ServiceService, PrismaService],
})
export class AppModule {}
