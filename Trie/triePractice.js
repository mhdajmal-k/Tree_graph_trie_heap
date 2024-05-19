class TrieNode{
    constructor(){
        this.child={}
        this.wordEnd=false
    }
}
class Tire{
    constructor(){
        this.root=new TrieNode()
    }
    add(words){
        let node=this.root
        for (const word of words) {
            if(!node.child[word]){
                node.child[word]=new TrieNode()
            }
            node=node.child[word]
        }
        node.wordEnd=true
    }
    search(words){
        let node=this.root
        for (const word of words) {
            if (!node.child[word]) {
                return false
            }
            node=node.child[word]
        }
        return node.wordEnd
    }
    autoCompleat(prefix){
        if(prefix==""){
            return null
        }
        let node=this.root
        for (const word of prefix) {
            if(!node.child[word]){
                return false
            }
            node=node.child[word]
        }
        return this.Compleat(node,prefix)
    }
    Compleat(node,prefix){

        console.log(prefix);
        let result=[]
        if(node.wordEnd){
            result.push(prefix)
        }
        for (const word in node.child) {
            result=result.concat(this.Compleat(node.child[word],prefix+word))
        }
        return result
    }
}

const trie=new Tire()
trie.add("ajmal")
trie.add("ajy")
trie.add("binal")
console.log(trie.search("ajmala"));
console.log(trie.autoCompleat("aj"))