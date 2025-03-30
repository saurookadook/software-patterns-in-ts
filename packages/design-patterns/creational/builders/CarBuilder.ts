import { Builder } from './Builder';
import { EngineTypes, ComputerTypes, GPSTypes } from './constants';

type NotSet = 'NOT_SET';

type NotSettable<T> = T | NotSet

/**
 * @description A car can have a GPS, trip computer and some number of \
 * seats. Different models of cars (sports car, SUV, \
 * cabriolet) might have different features installed or \
 * enabled.
 */
export class Car {
    static NOT_SET: NotSet = 'NOT_SET';

    private _seats: NotSettable<number> = Car.NOT_SET;
    private _engine: NotSettable<EngineTypes> = Car.NOT_SET;
    private _tripComputer: NotSettable<ComputerTypes> = Car.NOT_SET;
    private _GPS: NotSettable<GPSTypes> = Car.NOT_SET;


    constructor() {
        // TODO: maybe add some default values
    }

    get seats(): NotSettable<number> {
        return this._seats;
    }

    set seats(seats: number) {
        this._seats = seats;
    }

    get engine(): NotSettable<EngineTypes> {
        return this._engine;
    }

    set engine(engineType: EngineTypes) {
        if (!(engineType in EngineTypes)) {
            throw new TypeError(`Invalid engine type: '${engineType}'`);
        }
        this._engine = engineType;
    }

    get tripComputer(): NotSettable<ComputerTypes> {
        return this._tripComputer;
    }

    set tripComputer(tripComputerType: ComputerTypes) {
        if (!(tripComputerType in ComputerTypes)) {
            throw new TypeError(`Invalid trip computer type: '${tripComputerType}'`);
        }
        this._tripComputer = tripComputerType;
    }

    get GPS(): NotSettable<GPSTypes> {
        return this._GPS;
    }

    set GPS(gpsType: GPSTypes) {
        if (!(gpsType in GPSTypes)) {
            throw new TypeError(`Invalid GPS type: '${gpsType}'`);
        }
        this._GPS = gpsType;
    }
}

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
}
