import { ShapePrototype } from "./ShapePrototype";

/**
 * @description Concrete prototype. The cloning method creates a new object \
 * in one go by calling the constructor of the current class and \
 * passing the current object as the constructor's argument. \
 * Performing all the actual copying in the constructor helps to \
 * keep the result consistent: the constructor will not return a \
 * result until the new object is fully built; thus, no object \
 * can have a reference to a partially-built clone.
 */
export class Rectangle extends ShapePrototype {
    public height: number;
    public width: number;

    constructor(source?: Rectangle) {
        super(source);

        if (source != null && source instanceof Rectangle) {
            this.width = source.width;
            this.height = source.height;
        } else {
            this.width = 0;
            this.height = 0;
        }
    }

    clone(): ShapePrototype {
        return new Rectangle(this);
    }

    getArea(): number {
        return this.height * this.width;
    }

    getPerimeter(): number {
        return 2 * this.height + 2 * this.width;
    }
}
