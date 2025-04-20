import { EngineTypes } from '../constants';
import type { Car, Manual }  from '../entities';
import { Builder, CarConfig } from '../types';

type BuilderArg = Builder<Car> | Builder<Manual>

/**
 * @description The director is only responsible for executing the building \
 * steps in a particular sequence. It's helpful when producing products \
 * according to a specific order or configuration. Strictly speaking, the \
 * director class is optional, since the client can control builders directly.
 *
 * The director works with any builder instance that the client code passes \
 * to it. This way, the client code may alter the final type of the newly \
 * assembled product. The director can construct several product variations \
 * using the same building steps.
 */
export class Director {
    constructCarFromConfig(builder: BuilderArg, config: CarConfig) {
        builder.reset();
        builder.setSeats(config.seats);
        builder.setEngine(config.engine);
        builder.setTripComputer(config.installTripComputer);
        builder.setGPS(config.installGPS);
    }

    constructBasicDieselCar(builder: BuilderArg): void {
        this.constructCarFromConfig(builder, {
            seats: 2,
            engine: EngineTypes.Diesel,
            installTripComputer: false,
            installGPS: false,
        });
    }

    constructBasicElectricCar(builder: BuilderArg): void {
        this.constructCarFromConfig(builder, {
            seats: 5,
            engine: EngineTypes.Electric,
            installTripComputer: true,
            installGPS: true,
        });
    }

    constructBasicGasolineCar(builder: BuilderArg): void {
        this.constructCarFromConfig(builder, {
            seats: 8,
            engine: EngineTypes.Gasoline,
            installTripComputer: false,
            installGPS: true,
        });
    }
}
