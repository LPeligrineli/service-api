"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const config_1 = require("@nestjs/config");
const client_1 = require("@prisma/client");
exports.databaseConfig = {
    imports: [config_1.ConfigModule],
    provide: client_1.PrismaClient,
    useFactory: (configService) => {
        const options = {
            datasources: {
                db: {
                    url: configService.get('DATABASE_URL'),
                },
            },
        };
        const prisma = new client_1.PrismaClient(options);
        prisma.$connect();
        return prisma;
    },
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=database.config.js.map