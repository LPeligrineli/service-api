import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Service } from '../models/service.model';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(service: Service) {
    return this.prisma.service.create({ data: service });
  }

  async findAll() {
    return this.prisma.service.findMany();
  }

  async findOne(id: string) {
    return this.prisma.service.findUnique({ where: { id } });
  }

  async update(id: string, service: Service) {
    return this.prisma.service.update({ where: { id }, data: service });
  }

  async remove(id: string) {
    return this.prisma.service.delete({ where: { id } });
  }
}
