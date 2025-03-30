import { EngineTypes, ComputerTypes, GPSTypes } from './constants';
import { Car } from './entities';
import type { Builder } from './types';

/**
 * @description The concrete builder classes follow the builder interface \
 * and provide specific implementations of the building steps. Your \
 * program may have program may have several variations of builders, each \
 * implemented differently.
 */
export class CarBuilder implements Builder {
    private car: Car;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.car = new Car();
    }

    getSeats() {
        return this.car.seats;
    }

    setSeats(seats: number): void {
        this.car.seats = seats;
    }

    getEngine() {
        return this.car.engine;
    }

    setEngine(engineType: EngineTypes): void {
        this.car.engine = engineType;
    }

    getTripComputer() {
        return this.car.tripComputer;
    }

    setTripComputer(computerType: ComputerTypes): void {
        this.car.tripComputer = computerType;
    }

    getGPS() {
        return this.car.GPS;
    }

    setGPS(gpsType: GPSTypes): void {
        this.car.GPS = gpsType;
    }

    /**
     * @description Concrete builders are supposed to provide their own \
     * methods for retrieving results. That's because various \
     * types of builders may create entirely different products \
     * that don't all follow the same interface. Therefore such \
     * methods can't be declared in the builder interface (at \
     * least not in a statically-typed programming language). \
     *
     * Usually, after returning the end result to the client, a \
     * builder instance is expected to be ready to start \
     * producing another product. That's why it's a usual \
     * practice to call the reset method at the end of the \
     * `getProduct` method body. However, this behavior isn't \
     * mandatory, and you can make your builder wait for an \
     * explicit reset call from the client code before disposing \
     * of the previous result. \
    */
    getProduct(): Car {
        const product = this.car;
        this.reset();
        return product;
    }
}
