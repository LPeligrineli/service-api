import { Module } from '@nestjs/common';
import { ServiceService } from '../services/service.service';
import { ServiceController } from '../controllers/service.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [ServiceController],
  providers: [ServiceService, PrismaService],
})
export class ServiceModule {}
