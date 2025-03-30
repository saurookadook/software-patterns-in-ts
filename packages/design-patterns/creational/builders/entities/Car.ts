import { SeatsMetadata, EngineTypes, ComputerTypes, GPSTypes } from '../constants';
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
    private _tripComputer: NotSettable<ComputerTypes> = Car.NOT_SET;
    private _GPS: NotSettable<GPSTypes> = Car.NOT_SET;

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
