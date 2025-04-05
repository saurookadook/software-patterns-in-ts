import { beforeEach, describe, expect, test } from 'vitest';

import { LinkedList } from '../LinkedList';

describe('LinkedList', () => {
    let linkedList: LinkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    test('should append nodes to the list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.show()).toEqual(`1 → 2 → 3 → null`);
    });

    test('should add nodes to the front of the list', () => {
        linkedList.append(1);
        linkedList.addFirst(0);

        expect(linkedList.show()).toEqual(`0 → 1 → null`);
    });

    test('should delete nodes from the list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.delete(2);

        expect(linkedList.show()).toEqual(`1 → 3 → null`);
    });

    test('should return an empty array when the list is empty', () => {
        expect(linkedList.show()).toEqual('null');
    });
});
