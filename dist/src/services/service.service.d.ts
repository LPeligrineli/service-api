import { PrismaService } from '../prisma.service';
import { Service } from '../models/service.model';
export declare class ServiceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(service: Service): Promise<import(".prisma/client").Service>;
    findAll(): Promise<import(".prisma/client").Service[]>;
    findOne(id: string): Promise<import(".prisma/client").Service>;
    update(id: string, service: Service): Promise<import(".prisma/client").Service>;
    remove(id: string): Promise<import(".prisma/client").Service>;
}
