class TrieNode{
    constructor(){
        this.children = new Map();
        this.isEndOfWord = false;
    }

}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let node = this.root;
        for(const char of word){
            if(!node.children.has(char)){
                node.children.set(char, new TrieNode())
            }

            node = node.children.get(char)
        }

        node.isEndOfWord = true;
    }

    autoComplete(prefix){
        let node = this.root;
        console.log(prefix,"is prefix");
        for(const char of prefix){
            if(!node.children.has(char)){
                return [];
            }

            node = node.children.get(char)
        }

        return this.findWordsWithPrefix(node, prefix);
    }

    findWordsWithPrefix(node, prefix){
        let words = [];
        if(node.isEndOfWord){
            words.push(prefix)
        }

        for(const [char, childNode] of node.children){
            words = words.concat(this.findWordsWithPrefix(childNode, prefix + char))
        }

        return words;
    }

    
}

const trie = new Trie();

trie.insert("amazon");
trie.insert("amazing");
trie.insert("amaze");
trie.insert("amazonPrime");
trie.insert("hello")
trie.insert("world")


console.log("Autocomplete results for 'amaz':", trie.autoComplete("amaz"));