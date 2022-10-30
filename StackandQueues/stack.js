// Stacks

//google
//udemy.com
//youtube

//Stacks and quues can be build using both arrays and linked lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;

      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.length === 1) {
        this.bottom = null
     
    }
    const removing = this.top;
    this.top = removing.next;
    this.length--;
    return this;
  }
}
const mystack = new Stack();
console.log(mystack);
mystack.push("google");
mystack.push("udemy");
mystack.push("discord");
mystack.pop();
mystack.pop();
mystack.pop();
console.log(mystack);



class ArrayStack {
    constructor(){
       this.stack = []

    }
    peek(){
        return this.stack[this.stack.length - 1]
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        this.stack.pop()

    }
}

const arrayStack = new ArrayStack()
arrayStack.push(1);
arrayStack.push(2);
console.log(arrayStack)
console.log(arrayStack.peek())
arrayStack.pop()
arrayStack.pop()
console.log(arrayStack)
console.log(arrayStack.peek())
