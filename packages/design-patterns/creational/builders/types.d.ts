export interface Builder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engineType: string): void; // TODO: maybe enum?
    setTripComputer(computerType: string): void; // TODO: maybe enum?
    setGPS(gpsType: string): void; // TODO: maybe enum?
}

export type NotSet = 'NOT_SET';

export type NotSettable<T> = T | NotSet
