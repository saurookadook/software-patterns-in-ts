import { beforeEach, describe, expect, test } from 'vitest';

import { Rectangle } from '../src/Rectangle';

describe('Rectangle', () => {
    let rectangle: Rectangle;

    beforeEach(() => {
        rectangle = new Rectangle();
        rectangle.height = 5;
        rectangle.width = 10;
    });

    test('should return the correct area', () => {
        expect(rectangle.getArea()).toEqual(rectangle.height * rectangle.width);
    });

    test('should return the correct perimeter', () => {
        expect(rectangle.getPerimeter()).toBeCloseTo((2 * rectangle.height) + (2 * rectangle.width));
    });

    test('should be clonable', () => {
        expect(typeof rectangle.clone).toEqual('function');

        const rectangleClone = rectangle.clone();

        expect(rectangleClone).not.toBe(rectangle);
        expect(rectangleClone).toEqual(rectangle);
    });
});
