import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { ShapePrototype } from "./ShapePrototype";

export class PrototypeApp {
    public shapes: ShapePrototype[] = [];

    constructor() {
        const circle = new Circle();
        circle.X = 10;
        circle.Y = 10;
        circle.color = "red";
        circle.radius = 20;

        const anotherCircle = circle.clone();
        anotherCircle.color = "blue";

        const rectangle = new Rectangle();
        rectangle.color = "yellow";
        rectangle.height = 20;
        rectangle.width = 10;

        this.shapes.push(circle, anotherCircle, rectangle);
    }

    businessLogic() {
        // Prototype rocks because it lets you produce a copy of
        // an object without knowing anything about its type.
        const shapesCopy: ShapePrototype[] = [];

        // For instance, we don't know the exact elements in the
        // shapes array. All we know is that they are all
        // shapes. But thanks to polymorphism, when we call the
        // `clone` method on a shape the program checks its real
        // class and runs the appropriate clone method defined
        // in that class. That's why we get proper clones
        // instead of a set of simple Shape objects.
        this.shapes.forEach((s) => {
            shapesCopy.push(s.clone());
        });

        // The `shapesCopy` array contains exact copies of the
        // `shape` array's children.
    }
}
