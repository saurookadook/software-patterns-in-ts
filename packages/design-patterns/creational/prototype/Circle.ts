import { ShapePrototype } from "./ShapePrototype";

export class Circle extends ShapePrototype {
    public radius: number;

    constructor(source?: Circle) {
        super(source);

        if (source != null && source instanceof Circle) {
            this.radius = source.radius;
        } else {
            this.radius = 0;
        }
    }

    clone(): ShapePrototype {
        return new Circle(this);
    }

    getArea(): number {
        return Math.PI * this.radius^2;
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }

    getPerimeter(): number {
        return this.getCircumference();
    }
}
