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
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNewNode(this.root, node);
    }
  }
  insertNewNode(root, node) {
    if (root.value > node.value) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertNewNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNewNode(root.right, node);
      }
    }
  }
  search(root,value){
    if(root==null){
        return false
    }
    if(root.value==value){
        return true
    }else if(root.value>value){
        return this.search(root.left,value)
    }else{
        return this.search(root.right,value)
    }
  }
  inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)

    }
  }
  preOrder(root){
    if(root){
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
  }
  postOrder(root){
    if(root){
        this.preOrder(root.left)
        this.preOrder(root.right)
        console.log(root.value);
    }
  }
  leverOrder(root){

    let queue=[root]
    while(queue.length){
        let curr=queue.shift()
        console.log(curr.value)
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
  }
  min(root){
    if(root.left==null){
        return root.value
    }
    return this.min(root.left)
  }
  max(root){
    if(root.right==null){
        return root.value
    }
    return this.max(root.right)
  }
  sumOfMinAndMax(root){
    let sum=this.max(root)+this.min(root)
    return sum
  }
  getHight(root){
    if(root==null){
        return 0
    }
    let leftHight=this.getHight(root.left)
    let rightHight=this.getHight(root.right)
    return Math.max(leftHight,rightHight)+1
  }
  validate(root,min,max){
    if(!root){
        return true
    }
    if(root.value<=min||root.value>=max){
        return false
    }
    return this.validate(root.left,min,root.value)&&this.validate(root.right,root.value,max)

  }
  delete(value){
    this.root=this.remove(this.root,value)
  }
  remove(root,value){
    if(root==null){
        return root
    }
    if(root.value>value){
        root.left=this.remove(root.left,value)
    }else if(this.root<value){
        root.right=this.remove(root.right,value)
    }else {
        if(!root.left&&root.right){
            return null
        }
        if(!root.left){
            return root.right
        }
         if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)
        root.right=this.remove(root.right,root.value)
    }
    return root
  }
  checkBalance(root){
    if(root==null){
      return true
    }
    let leftHight=this.getHight(root.left)
    let rightHight=this.getHight(root.right)
    if(Math.abs(leftHight-rightHight)>1){
      return false
    }
    return this.checkBalance(root.left)&&this.checkBalance(root.right)
  }

}

const bst=new BinarySearchTree()
bst.insert(50)
bst.insert(40)
bst.insert(30)
bst.insert(80)
bst.insert(10)
bst.insert(20)
bst.insert(90)
bst.insert(100)
console.log(bst.search(bst.root,400))
console.log("..........inOrder");
bst.inOrder(bst.root)
console.log("-------------pre order");
bst.preOrder(bst.root)
console.log(".............postOrder");
bst.postOrder(bst.root)
console.log(".............levelOrder");
bst.leverOrder(bst.root)
console.log("...........max value");
console.log(bst.max(bst.root))
console.log("...........min value");
console.log(bst.min(bst.root));
console.log("-----------sum of min and max");
console.log(bst.sumOfMinAndMax(bst.root));
console.log(".............get hight");
console.log(bst.getHight(bst.root));
console.log(bst.validate(bst.root));
console.log(bst.checkBalance(bst.root));

