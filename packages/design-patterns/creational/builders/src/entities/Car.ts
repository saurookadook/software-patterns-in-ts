import { SeatsMetadata, EngineTypes } from '../constants';
import type { NotSet, NotSettable } from '../types';

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
    private _tripComputer: boolean = false;
    private _GPS: boolean = false;

    constructor() {
        // TODO: maybe add some default values
    }

    get seats(): NotSettable<number> {
        return this._seats;
    }

    set seats(seats: number) {
        if (seats < SeatsMetadata.MIN_COUNT || seats > SeatsMetadata.MAX_COUNT) {
            throw new RangeError(`Invalid number of seats: '${seats}'. Must be between ${SeatsMetadata.MIN_COUNT} and ${SeatsMetadata.MAX_COUNT}.`);
        }
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

    get tripComputer(): boolean {
        return this._tripComputer;
    }

    set tripComputer(shouldHaveTripComputer: boolean) {
        this._tripComputer = shouldHaveTripComputer;
    }

    get GPS(): boolean {
        return this._GPS;
    }

    set GPS(shouldHaveGps: boolean) {
        this._GPS = shouldHaveGps;
    }
}
