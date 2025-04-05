type Nullable<T> = T | null;

class LinkedListNode {
    public data: any;
    public next: Nullable<LinkedListNode>;

    constructor(data: any, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    private head: Nullable<LinkedListNode>;

    constructor() {
        this.head = null;
    }

    append(data: any) {
        const newNode = new LinkedListNode(data);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    addFirst(data: any) {
        const newNode = new LinkedListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data: any) {
        if (this.head == null) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while(current.next != null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    show() {
        let currentNode = this.head;
        let linkedListStr = '';

        while(currentNode?.data != null) {
            linkedListStr += `${currentNode.data} → `;
            currentNode = currentNode.next;
        }

        if (linkedListStr !== '') {
            linkedListStr += 'null';
        }

        console.log(linkedListStr);
    }

    show_usingArray() {
        let currentNode = this.head;
        const linkedListData: any[] = [];

        while(currentNode?.data != null) {
            linkedListData.push(currentNode.data);
            currentNode = currentNode.next;
        }

        linkedListData.push('null');

        console.log(linkedListData.join(' → '));
    }
}

export { LinkedListNode, LinkedList };
export default LinkedList;
