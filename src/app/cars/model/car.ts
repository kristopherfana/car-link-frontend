import { Client } from "src/app/clients/model/client";

export class Car {
    id!: number;
    regNumber!: string;
    client!: Client;
    make!: string;
    model!: string;
    color!: string;
    pictureFileName!: string;
    createdAt!: number;
    updatedAt!: number
}
