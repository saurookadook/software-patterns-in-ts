import { ShapePrototype } from "./ShapePrototype";

export class ShapePrototypeRegistry {
    private itemMap: Map<string, ShapePrototype> = new Map();

    public addItem(key: string, item: ShapePrototype): void {
        this.itemMap.set(key, item);
    }

    public getById(key: string): ShapePrototype | null {
        return this.itemMap.get(key) ?? null;
    }

    public getFirstByColor(color: string): ShapePrototype | null {
        for (const shape of this.itemMap.values()) {
            if (shape.color === color) {
                return shape;
            }
        }

        return null;
    }

    public getAllByColor(color: string): ShapePrototype[] {
        const shapes: ShapePrototype[] = [];

        for (const shape of this.itemMap.values()) {
            if (shape.color === color) {
                shapes.push(shape);
            }
        }

        return shapes;
    }
}
