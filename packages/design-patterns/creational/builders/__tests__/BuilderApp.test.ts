import { beforeEach, describe, expect, test } from 'vitest';

import {
    Car,
    CarConfig,
    BuilderApp,
    EngineTypes,
    Manual,
    ResultProduct,
} from '../src';

const testCases = [
    {
        testName: 'handles car configs for diesel cars',
        carConfigs: [
            { seats: 5, engine: EngineTypes.Diesel, installTripComputer: true, installGPS: false },
            { seats: 8, engine: EngineTypes.Diesel, installTripComputer: true, installGPS: true },
            { seats: 2, engine: EngineTypes.Diesel, installTripComputer: false, installGPS: false },
            { seats: 5, engine: EngineTypes.Diesel, installTripComputer: false, installGPS: true },
            { seats: 7, engine: EngineTypes.Diesel, installTripComputer: false, installGPS: true },
        ],
    },
    {
        testName: 'handles car configs for electric cars',
        carConfigs: [
            { seats: 5, engine: EngineTypes.Electric, installTripComputer: true, installGPS: false },
            { seats: 8, engine: EngineTypes.Electric, installTripComputer: true, installGPS: true },
            { seats: 2, engine: EngineTypes.Electric, installTripComputer: true, installGPS: false },
            { seats: 4, engine: EngineTypes.Electric, installTripComputer: true, installGPS: true },
        ],
    },
    {
        testName: 'handles car configs for gasoline cars',
        carConfigs: [
            { seats: 2, engine: EngineTypes.Gasoline, installTripComputer: false, installGPS: false },
            { seats: 7, engine: EngineTypes.Gasoline, installTripComputer: false, installGPS: true },
            { seats: 5, engine: EngineTypes.Gasoline, installTripComputer: true, installGPS: true },
            { seats: 4, engine: EngineTypes.Gasoline, installTripComputer: true, installGPS: false },
        ],
    },
    {
        testName: 'handles car configs with mix of valid settings',
        carConfigs: [
            { seats: 5, engine: EngineTypes.Electric, installTripComputer: true, installGPS: false },
            { seats: 8, engine: EngineTypes.Electric, installTripComputer: true, installGPS: true },
            { seats: 2, engine: EngineTypes.Gasoline, installTripComputer: false, installGPS: false },
            { seats: 5, engine: EngineTypes.Diesel, installTripComputer: false, installGPS: true },
            { seats: 7, engine: EngineTypes.Gasoline, installTripComputer: false, installGPS: true },
        ],
    },
];

describe('BuilderApp', () => {
    let builderApp: BuilderApp;

    beforeEach(() => {
        builderApp = new BuilderApp();
    });

    test.each(testCases)(`$testName`, ({ carConfigs }: { carConfigs: CarConfig[] }) => {
        builderApp.makeCars(carConfigs);

        const resultProducts: ResultProduct[] = builderApp.getResultProducts();

        expect(resultProducts).toHaveLength(carConfigs.length);

        resultProducts.forEach((resultProduct, index) => {
            const [car, manual] = resultProduct;

            expect(car).toBeInstanceOf(Car);
            expect(manual).toBeInstanceOf(Manual);

            const expectedCarConfig = carConfigs[index];
            expect(car.seats).toBe(expectedCarConfig.seats);
            expect(car.engine).toBe(expectedCarConfig.engine);
            expect(manual.tripComputer).toBe(expectedCarConfig.installTripComputer);
            expect(manual.GPS).toBe(expectedCarConfig.installGPS);
        });
    });
});
