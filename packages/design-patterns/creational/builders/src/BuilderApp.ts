// import { EngineTypes } from './constants';
import { Car, Director, Manual } from './entities';
import { CarBuilder } from './CarBuilder';
import { CarManualBuilder } from './CarManualBuilder';
import { Builder, CarConfig } from './types';

export type ResultProduct = [Car, Manual]

/**
 * @description The client code creates a builder object, passes it to the \
 * director and then initiates the construction process. The end result is \
 * retrieved from the builder object.
 */
export class BuilderApp {
    private director: Director;
    private resultProducts: ResultProduct[] = [];
    private builder: Builder<Car> | Builder<Manual>;

    constructor() {
        this.director = new Director();
    }

    makeCars(carConfigs: CarConfig[]): void {
        if (!Array.isArray(carConfigs) || carConfigs.length <= 0) {
            console.warn('Skipping car creation. No car configs provided.');
        }

        for (const carConfig of carConfigs) {
            this.builder = new CarBuilder();
            this.director.constructCarFromConfig(this.builder, carConfig);
            const car = this.builder.getProduct();

            this.builder = new CarManualBuilder();
            this.director.constructCarFromConfig(this.builder, carConfig);
            const manual = this.builder.getProduct();

            this.resultProducts.push([car, manual]);
        }
    }

    getResultProducts(): ResultProduct[] {
        return this.resultProducts;
    }
}
