import { EngineTypes } from '../constants';
import { Builder } from '../types';

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
    constructDieselCar(builder: Builder): void {
        builder.setSeats(2);
        builder.setEngine(EngineTypes.Diesel);
        builder.setTripComputer(false);
        builder.setGPS(false);
    }

    constructElectricCar(builder: Builder): void {
        builder.setSeats(5);
        builder.setEngine(EngineTypes.Electric);
        builder.setTripComputer(true);
        builder.setGPS(true);
    }

    constructGasolineCar(builder: Builder): void {
        builder.setSeats(8);
        builder.setEngine(EngineTypes.Gasoline);
        builder.setTripComputer(false);
        builder.setGPS(true);
    }
}
