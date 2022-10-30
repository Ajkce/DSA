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
    if(this.length === 0){
        this.top = newNode;
        this.bottom = newNode

    }else{
        const holdingPointer = this.top
        this.top = newNode
      
        this.top.next = holdingPointer
    }
    this.length++;
    return this
  }
  pop() {
    const removing = this.top;
    console.log(removing.next)
    this.top = removing.next
    this.length--;
    return this
}
}
const mystack = new Stack();
console.log(mystack);
mystack.push('google');
mystack.push('udemy');
mystack.push('discord');
console.log(mystack);
console.log(mystack.peek())
console.log(mystack.pop())