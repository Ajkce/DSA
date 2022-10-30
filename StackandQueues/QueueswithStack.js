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

