function ListNode(x) {
  this.value = x;
  this.next = null;
}

class Queue {
  constructor () {
    this._queue = null;
    this._size = 0;
  }

  get size () {
    return this._size;
  }

  enqueue (value) {
    const listNode = new ListNode(value);
    if (this.size) {
      let queue = this._queue;
      while (true) {
        if (queue.next === null) {
          queue.next = listNode;
          break;
        } else {
          queue = queue.next;
        }
      }
    } else {
      this._queue = listNode;
    }
    this._size++;
  }

  dequeue () {
    if (this.size) {
      this._size--;
      const value = this._queue.value;
      this._queue = this._queue.next;
      return value;
    }
  }
}

const queue = new Queue();

queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);
queue.enqueue(15);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());