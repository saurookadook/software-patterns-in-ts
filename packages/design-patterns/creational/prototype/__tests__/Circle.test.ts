import { beforeEach, describe, expect, test } from 'vitest';

import { Circle } from '../Circle';

describe('Circle', () => {
    let circle: Circle;

    beforeEach(() => {
        circle = new Circle();
        circle.radius = 5;
    });

    test('should return the correct area', () => {
        expect(circle.getArea()).toEqual(Math.PI * circle.radius^2);
    });

    test('should return the correct perimeter', () => {
        expect(circle.getPerimeter()).toBeCloseTo(2 * Math.PI * circle.radius);
    });

    test('should be clonable', () => {
        expect(typeof circle.clone).toEqual('function');

        const circleClone = circle.clone();

        expect(circleClone).not.toBe(circle);
        expect(circleClone).toEqual(circle);
    });
});
