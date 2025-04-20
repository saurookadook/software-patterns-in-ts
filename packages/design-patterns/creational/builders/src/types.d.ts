import { EngineTypes } from "./constants";

// export interface Builder<T = unknown> {
//     reset(): void;
//     setSeats(seats: number): void;
//     setEngine(engineType: EngineTypes): void;
//     setTripComputer(shouldHaveTripComputer: boolean): void;
//     setGPS(shouldHaveGPS: boolean): void;
//     getProduct(): T;
// }

// TODO: better way to delcare this type?
export abstract class Builder<T> {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engineType: EngineTypes): void;
    setTripComputer(shouldHaveTripComputer: boolean): void;
    setGPS(shouldHaveGPS: boolean): void;
    getProduct(): T;
}

export type CarConfig = {
    seats: number;
    engine: EngineTypes;
    installTripComputer: boolean;
    installGPS: boolean;
}

export type NotSet = 'NOT_SET';

export type NotSettable<T> = T | NotSet
