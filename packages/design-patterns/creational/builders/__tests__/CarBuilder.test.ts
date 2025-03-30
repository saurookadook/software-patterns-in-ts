import { beforeEach, describe, expect, test } from 'vitest';

import { CarBuilder } from '../../builders';
import { EngineTypes } from '../constants';
import { Car } from '../entities';

describe('CarBuilder', () => {
    let carBuilder: CarBuilder;

    beforeEach(() => {
        carBuilder = new CarBuilder();
    });

    test('can set and get number of seats', () => {
        expect(carBuilder.getSeats()).toBe(Car.NOT_SET);

        carBuilder.setSeats(6);

        expect(carBuilder.getSeats()).toBe(6);
    });

    test('can set and get engine', () => {
        expect(carBuilder.getEngine()).toBe(Car.NOT_SET);

        carBuilder.setEngine(EngineTypes.Electric);

        expect(carBuilder.getEngine()).toBe(EngineTypes.Electric);
    });

    test('can set and get trip computer', () => {
        expect(carBuilder.getTripComputer()).toBe(false);

        carBuilder.setTripComputer(true);

        expect(carBuilder.getTripComputer()).toBe(true);
    });

    test('can set and get GPS', () => {
        expect(carBuilder.getGPS()).toBe(false);

        carBuilder.setGPS(true);

        expect(carBuilder.getGPS()).toBe(true);
    });
});
