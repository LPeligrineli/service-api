import { ServiceService } from '../services/service.service';
import { Service } from '../models/service.model';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
    create(service: Service): Promise<import(".prisma/client").Service>;
    findAll(): Promise<import(".prisma/client").Service[]>;
    findOne(id: string): Promise<import(".prisma/client").Service>;
    update(id: string, service: Service): Promise<import(".prisma/client").Service>;
    remove(id: string): Promise<import(".prisma/client").Service>;
}
