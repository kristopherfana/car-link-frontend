import { Car } from "src/app/cars/model/car";

export class Client {
    id!: number;
    email!: string;
    name!: string;
    streetAddress!: string;
    city!: string;
    country!: string;
    phoneNumber!: string;
    createdAt!: number;
    updatedAt!: number;
    cars!: Car[];
    about!: string;

    constructor(init?: Partial<Client>) {
        Object.assign(this, init);
    }
}

export class ClientForm {
    email?: string | null | undefined;
    name?: string | null | undefined;
    address?: string | null | undefined;
    phoneNumber?: string | null | undefined;

    constructor(init?: Partial<ClientForm>) {
        Object.assign(this, init);
    }
}