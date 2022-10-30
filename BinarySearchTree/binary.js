class Node {
    constructor(value){
this.value = value;
this.left = null;
this.right = null
    }
}

class BinarySearchTree {
    constructor (){
        this.root = null;
    }
    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node;
        }else {
           
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    //left
                    if(!currentNode.left){
                        currentNode.left = node
                        return this
                    }
                    currentNode = currentNode.left
                }else{
                    //right
                    if(!currentNode.right){
                        currentNode.right = node
                        return this
                    }
                    currentNode = currentNode.right
                }
            
            }
        }

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
console.log(tree)