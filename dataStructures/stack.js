class Stack {
  constructor(capacity) {
    this.capacity = capacity || Infinity;
    this.stack = {};
    this.count = 0;
  }

  push(el) {
    if (this.count < this.capacity) {
      this.count++;
      this.stack[this.count] = el;
      return this.count;
    } else {
      return 'Stack overflow.'
    }
  }

  pop() {
    if (this.count > 0) {
      const lastEl = this.stack[this.count];
      delete this.stack[this.count];
      this.count--;
      return lastEl;
    } else {
      return 'Stack is empty.'
    }
  }

  size() {
    return this.count;
  }

  showStack() {
    return this.stack;
  }
}

const myStack = new Stack();

console.log(myStack.push(5));
console.log(myStack.push(10));
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.showStack());