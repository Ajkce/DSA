class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      const node = new Node(value);
      if (this.root === null) {
        this.root = node;
      } else {
        let currentNode = this.root;
        while (true) {
          if (value < currentNode.value) {
            //left
            if (!currentNode.left) {
              currentNode.left = node;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //right
            if (!currentNode.right) {
              currentNode.right = node;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
  
    lookup(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        }
        else if ((value = currentNode.value)) {
          return currentNode;
        }
      }
      return false;
    }
  
    delete(value){
      if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
          if (value < currentNode.value) {
              parentNode = currentNode
            currentNode = currentNode.left;
          } else if (value > currentNode.value) {
              parentNode = currentNode
            currentNode = currentNode.right;
          }
          else if ((value === currentNode.value)) {
             
          }
        }
        return false;
      
    }

    breadthFirstSearch(){
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while(queue.length > 0){
            currentNode = queue.shift();
            console.log(currentNode.value)
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){ 
                queue.push(currentNode.right)
            }
            
        }
        return list;
    }

    breadthFirstSearchR(queue, list){
        if(!queue.length){
            return list
        }
        const currentNode = queue.shift();
        list.push(currentNode.value)
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){ 
            queue.push(currentNode.right)
        }

        return this.breadthFirstSearchR(queue, list)

    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9);
  tree.insert(1);
  tree.insert(19);
  tree.insert(99);
  tree.insert(2);
  tree.insert(45);
  tree.insert(15);
  console.log(tree.lookup(99));
  console.log(tree);
  console.log(tree.breadthFirstSearch())
  console.log(tree.breadthFirstSearchR([tree.root], []))
  //       9
  //  1        19
  //2       15   99
 //      45