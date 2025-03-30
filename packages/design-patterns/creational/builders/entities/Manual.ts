import { SeatsMetadata, EngineTypes } from '../constants';
import type { NotSet, NotSettable } from '../types';

/**
 * @description Each car should have a user manual that corresponds to \
 * the car's configuration and describes all its features.
 *
 * @TODO Could probably move most of this class's implementation to a \
 * base class which is extended by both `Car` and `Manual`.
 */
export class Manual {
    static NOT_SET: NotSet = 'NOT_SET';

    private _seats: NotSettable<number> = Manual.NOT_SET;
    private _engine: NotSettable<EngineTypes> = Manual.NOT_SET;
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
