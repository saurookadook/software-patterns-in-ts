import { Builder } from './Builder';

/**
 * @description A car can have a GPS, trip computer and some number of \
 * seats. Different models of cars (sports car, SUV, \
 * cabriolet) might have different features installed or \
 * enabled.
 */
export class Car {
    private _seats: number;
    private _engine: string; // TODO: maybe enum?
    private _tripComputer: string; // TODO: maybe enum?
    private _GPS: string; // TODO: maybe enum?

    static NOT_SET: string = 'NOT_SET';

    constructor() {

    }

    get seats(): number {
        return this._seats ?? Car.NOT_SET;
    }

    set seats(seats: number) {
        this._seats = seats;
    }

    get engine(): string {
        return this._engine ?? Car.NOT_SET;
    }

    set engine(engineType: string) {
        this._engine = engineType;
    }

    get tripComputer(): string {
        return this._tripComputer ?? Car.NOT_SET;
    }

    set tripComputer(tripComputerType: string) {
        this._tripComputer = tripComputerType;
    }

    get GPS(): string {
        return this._GPS ?? Car.NOT_SET;
    }

    set GPS(gpsType: string) {
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

    setEngine(engineType: string): void {
        this.car.engine = engineType;
    }

    getTripComputer() {
        return this.car.tripComputer;
    }

    setTripComputer(computerType: string): void {
        this.car.tripComputer = computerType;
    }

    getGPS() {
        return this.car.GPS;
    }

    setGPS(gpsType: string): void {
        this.car.GPS = gpsType;
    }
}
