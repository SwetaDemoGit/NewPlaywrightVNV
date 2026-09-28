// Question 28: Implement Queue
// Queue follows FIFO: First In, First Out.
//
// Operations:
// enqueue, dequeue, front, isEmpty

class Queue {

    constructor() {
        // Array is used to store queue elements.
        this.items = [];
    }

    enqueue(value) {
        // Add a new element at the end.
        this.items.push(value);
    }

    dequeue() {
        // Remove and return the first element.
        return this.items.shift();
    }

    front() {
        // Return the first element without removing it.
        return this.items[0];
    }

    isEmpty() {
        // Queue is empty when its length is zero.
        return this.items.length === 0;
    }
}

module.exports = { Queue };
