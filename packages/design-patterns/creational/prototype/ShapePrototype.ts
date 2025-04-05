export abstract class ShapePrototype {
    public X: number;
    public Y: number;
    public color: string;

    constructor(source?: ShapePrototype) {
        if (source != null && source instanceof ShapePrototype) {
            this.X = source.X;
            this.Y = source.Y;
            this.color = source.color;
        }
    }

    abstract clone(): ShapePrototype;

    abstract getArea(): number;
}
