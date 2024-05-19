class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    insertion(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertionNewNode(this.root,node)
        }
    }
    insertionNewNode(root,node){
        if(root.value>node.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertionNewNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertionNewNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else if(root.value==value){
            return true
        }else{
            if(root.value>value){
                console.log("hi");
                return this.search(root.left,value)
            }else{
                console.log('ki');
                return this.search(root.right,value)
            }
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            console.log(root.value);
            this.postOrder(root.left)
            this.postOrder(root.right)
        }
    }
    preOrder(root){
        if(root){
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.value);
        }
    }
    levelOrderTravel(root){
        if(!root){
            return
        }
        const queue=[]
        queue.push(root)
        while (queue.length) {
            const curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
           return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root==null){
            return root
        }
        if(root.value>value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
    getHight(root){
        if (!root) {
            return 0
        }
        const leftHight=this.getHight(root.left)
      
        const rightHight=this.getHight(root.right)
  
        const hight=Math.max(leftHight,rightHight)+1
        return hight
    }
    validateBst(root,min,max){
        if(root==null){
            return true
        }
        if(root.value<=min||root.value>max){
            return false
        }
        return this.validateBst(root.left,root.value,min)&&this.validateBst(root.right,min,root.value)

    }
}

const bst=new BinarySearchTree()
console.log(bst.isEmpty());
bst.insertion(40)
bst.insertion(50)
bst.insertion(30)
bst.insertion(20)
bst.insertion(10)
bst.insertion(60)
bst.insertion(80)
bst.insertion(90)
bst.delete(90)
console.log(bst.isEmpty());
console.log(bst.search(bst.root,50));
bst.inOrder(bst.root)
console.log("----------postOrder----------");
bst.postOrder(bst.root)
console.log("----------preOrder----------");
bst.preOrder(bst.root)
console.log("Level-order traversal:");
bst.levelOrderTravel(bst.root);
console.log("-----------min value------------");
console.log(bst.min(bst.root));
console.log("-------------------max---------");
console.log(bst.max(bst.root));
console.log("-----------hight------------");
console.log(bst.getHight(bst.root));
console.log(bst.validateBst(bst.root));



