import { beforeEach, describe, expect, test } from 'vitest';
import { Car, CarBuilder } from '../../builders';

describe('CarBuilder', () => {
    let carBuilder: CarBuilder;

    beforeEach(() => {
        carBuilder = new CarBuilder();
    });

    test('can set and get number of seats', () => {
        expect(carBuilder.getSeats()).toBe(Car.NOT_SET);

        expect('implement me!').toBe(false);
    });

    test('can set and get engine', () => {
        expect(carBuilder.getSeats()).toBe(Car.NOT_SET);

        expect('implement me!').toBe(false);
    });

    test('can set and get trip computer', () => {
        expect(carBuilder.getSeats()).toBe(Car.NOT_SET);

        expect('implement me!').toBe(false);
    });

    test('can set and get GPS', () => {
        expect(carBuilder.getSeats()).toBe(Car.NOT_SET);

        expect('implement me!').toBe(false);
    });
});
