// 10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next:{
//                 value: 16,
//                 next: null
//             }

//         }
//     }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    let counter = 0;
    let leader = this.head;
    while (counter !== index - 1) {
      leader = leader.next;
      counter++;
    }
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
  }

  remove(index) {
    let counter = 0;
    let leader = this.head;
    while (counter !== index - 1) {
      leader = leader.next;
      counter++;
    }
    console.log(leader.value);
    let follower = this.head;
    while (counter !== index + 2) {
      follower = follower.next;
      counter++;
    }
    leader.next = follower;
    this.length--;
    return this
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(20));
console.log(myLinkedList.append(50));
console.log(myLinkedList.prepend(5));
console.log(myLinkedList.insert(2, 90));
console.log(myLinkedList);
console.log(myLinkedList.insert(2, 500));
console.log(myLinkedList.insert(3, 25));
console.log(myLinkedList.insert(90, 900));
console.log(myLinkedList.printList());
console.log(myLinkedList.remove(2));
console.log(myLinkedList.printList());
console.log(myLinkedList.remove(2));
console.log(myLinkedList.printList());
