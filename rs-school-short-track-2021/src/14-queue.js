const ListNode = require('../extensions/list-node');

class Queue {
  constructor () {
    this.queue = null;
    this.queueSize = 0;
  }

  get size () {
    return this.queueSize;
  }

  enqueue (value) {
    const listNode = new ListNode(value);
    if (this.queueSize) {
      let { queue } = this;
      while (true) {
        if (queue.next === null) {
          queue.next = listNode;
          break;
        } else {
          queue = queue.next;
        }
      }
    } else {
      this.queue = listNode;
    }
    this.queueSize++;
  }

  dequeue () {
    const { value } = this.queue;
    if (this.queueSize) {
      this.queueSize--;
      this.queue = this.queue.next;
    }
    return value;
  }
}

module.exports = Queue;
