import { EngineTypes } from "./constants";

export interface Builder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engineType: EngineTypes): void;
    setTripComputer(shouldHaveTripComputer: boolean): void;
    setGPS(shouldHaveGPS: boolean): void;
}

export type NotSet = 'NOT_SET';

export type NotSettable<T> = T | NotSet
