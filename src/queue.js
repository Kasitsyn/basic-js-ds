const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null
		this.tail = null
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let array = new Array
		let curr = this.head

		while(curr){
			array.push(curr)
			curr = curr.next
		}
		
		return {...array[0]}

  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let element = new ListNode(value)
		if(this.head) {
			this.tail.next = element
			this.tail = element
		} else {
			this.head = element
			this.tail = element
		}
		// return this

  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const firstElem = this.head
		this.head = this.head.next
		return firstElem.value;

  }
}

module.exports = {
  Queue
};
