import { Client } from "src/app/clients/model/client";

export class Car {
    id!: number;
    regNumber!: string;
    client!: Client;
    make!: Make;
    model!: Model;
    interiorColor!: InteriorColor;
    exteriorColor!: ExteriorColor;
    engine!: Engine;
    body!: Body;
    pictureFileName!: string;
    createdAt!: number;
    updatedAt!: number;
}

export class CarDto {
    id!: number;
    clientEmail!: string;
    regNumber!: string;
    engineId!: number;
    modelId!: number;
    makeId!: number;
    bodyId!: number;
    interiorColorId!: number;
    exteriorColorId!: number;
    static makeId: number;
}

export class Make {
    id!: number;
    name!: string;

}

export class Model {
    id!: number;
    name!: string;
    make_id!: string;
}

export class Body {
    id!: number;
    type!: string;
    doors!: number;
    seats!: number;
}

export class Engine {
    id!: number;
    engine_type!: string;
    fuel_type!: string;
    cylinders!: string;
    horsepower_hp!: number;
    transmission!: string;
}

export class ExteriorColor {
    id!: number;
    name!: string;
    rgb!: string;
}

export class InteriorColor {
    id!: number;
    name!: string;
    rgb!: string;
}