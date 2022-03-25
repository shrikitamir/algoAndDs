class Queue {
  constructor(capacity) {
    this.capacity = capacity || Infinity;
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    if (this.count() < this.capacity) {
      this.queue[this.tail++] = value;
      return this.count();
    } else {
      return 'Queue overflow.'
    }
  }

  dequeue() {
    if (this.head < this.tail) {
      const element = this.queue[this.head];
      delete this.queue[this.head++];
      return element;
    } else {
      return 'Queue is empty.'
    }
  }

  peek() {
    return this.queue[this.head];
  }

  count() {
    return this.tail - this.head;
  }

  showQueue() {
    return this.queue;
  }
}

const myQueue = new Queue();

console.log(myQueue.enqueue(5))
console.log(myQueue.enqueue(10))
console.log(myQueue.enqueue(1))
console.log(myQueue.dequeue())
console.log(myQueue.count())
console.log(myQueue.peek())
console.log(myQueue.showQueue())