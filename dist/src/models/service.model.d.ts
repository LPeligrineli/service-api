export interface Service {
    id?: string;
    name: string;
    email: string;
    service: string;
    serviceDate: string;
    serviceTime: string;
    description: string;
    address: string;
    city: string;
    state: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hasLiked?: boolean;
}
