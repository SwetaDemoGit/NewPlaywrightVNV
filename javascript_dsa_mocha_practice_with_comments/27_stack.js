// Question 27: Implement Stack
// Stack follows LIFO: Last In, First Out.
//
// Operations:
// push, pop, peek, isEmpty

class Stack {

    constructor() {
        // Array is used internally to store stack elements.
        this.items = [];
    }

    push(value) {
        // Add the value to the top of the stack.
        this.items.push(value);
    }

    pop() {
        // Remove and return the top element.
        return this.items.pop();
    }

    peek() {
        // Return the top element without removing it.
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        // Stack is empty when its length is zero.
        return this.items.length === 0;
    }
}

module.exports = { Stack };
