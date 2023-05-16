import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServiceService } from '../services/service.service';
import { Service } from '../models/service.model';

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  create(@Body() service: Service) {
    return this.serviceService.create(service);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() service: Service) {
    return this.serviceService.update(id, service);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(id);
  }
}
