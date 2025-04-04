import { EngineTypes } from "./constants";
import { Car, Director, Manual } from "./entities";

type CarConfig = {
    seats: number;
}

type ResultProduct = [Car, Manual]

/**
 * @description The client code creates a builder object, passes it to the \
 * director and then initiates the construction process. The end result is \
 * retrieved from the builder object.
 */
export class BuilderApp {
    private director: Director;

    constructor() {
        this.director = new Director();
    }

    makeCars(carConfigs: CarConfig[]): ResultProduct[] {
        const resultProducts: ResultProduct[] = [];

        if (!Array.isArray(carConfigs) || carConfigs.length <= 0) {
            console.warn('Skipping car creation. No car configs provided.');
            return resultProducts;
        }

        return resultProducts;
    }
}
