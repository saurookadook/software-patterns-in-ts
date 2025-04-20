import { EngineTypes } from "./constants";
import { Manual } from "./entities";
import type { Builder } from "./types";

export class CarManualBuilder implements Builder<Manual> {
    private manual: Manual;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.manual = new Manual();
    }

    getSeats() {
        return this.manual.seats;
    }

    setSeats(seats: number): void {
        this.manual.seats = seats;
    }

    getEngine() {
        return this.manual.engine;
    }

    setEngine(engineType: EngineTypes): void {
        this.manual.engine = engineType;
    }

    getTripComputer() {
        return this.manual.tripComputer;
    }

    setTripComputer(shouldHaveTripComputer: boolean): void {
        this.manual.tripComputer = shouldHaveTripComputer;
    }

    getGPS() {
        return this.manual.GPS;
    }

    setGPS(shouldHaveGPS: boolean): void {
        this.manual.GPS = shouldHaveGPS;
    }

    getProduct(): Manual {
        const product = this.manual;
        this.reset();
        return product;
    }
}
