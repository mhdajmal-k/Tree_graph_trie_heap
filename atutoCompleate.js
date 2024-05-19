class TrieNode{
    constructor(){
        this.child={}
        this.wordEnds=false
    }
}

class Tire{
    constructor(){
        this.root=new TrieNode()
    }
    insert(Value){
        let curr=this.root
        for (const eachValue of Value) {
            
            if(!curr.child[eachValue]){
                curr.child[eachValue]=new TrieNode()

            }
            curr=curr.child[eachValue]

        }
        curr.wordEnds=true
    }
    search(word){
        let curr=this.root
        for (const words of word) {
            if(!curr.child[words]){
                return false
            }
            curr=curr.child[words]
        }
        return curr.wordEnds
    }
    // autoCompleat(prefix){
    //     let curr=this.root
    //     for (const word of prefix) {
    //         if(!curr.child[word]){
    //             return null
    //         }
    //         curr=curr.child[word]
    //     }
    //     return this.compleat(curr,prefix)
    // }
    // compleat(curr,prefix){
    //     let result=[]
    //     if(curr.wordEnds){
    //         result.push(prefix)
    //     }
    //     for (const char in curr.child) {
    //         result=result.concat(this.compleat(curr.child[char],prefix+char))
    //     }
    //     return result
    // }

    autoCompleat(prefix){
        let curr=this.root
        for (const word of prefix) {            
            if(!curr.child[word]){
                return null
            }
            curr=curr.child[word]
        }
        return this.compleat(curr,prefix)
    }
    compleat(curr,prefix){
        let result=[]
        if(curr.wordEnds){
            result.push(prefix)
        }
        for (const key in curr.child) {
      
            result=result.concat(this.compleat(curr.child[key],prefix+key))
        }
        return result
    }

}
const trie=new Tire()
trie.insert("ajmal")
trie.insert("ajmaaal")
trie.insert("ajay")
trie.insert("rahul")
trie.insert("geetha")

console.log(trie.root);
console.log(trie.search("ajmal"));
console.log(trie.autoCompleat("aj"));

