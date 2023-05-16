import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
export declare const databaseConfig: {
    imports: (typeof ConfigModule)[];
    provide: typeof PrismaClient;
    useFactory: (configService: ConfigService) => PrismaClient<{
        datasources: {
            db: {
                url: string;
            };
        };
    }, never, false>;
    inject: (typeof ConfigService)[];
};
