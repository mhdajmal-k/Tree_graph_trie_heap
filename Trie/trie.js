class TrieNode {
  constructor() {
    this.child = {};
    this.wordEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(words) {
    let node = this.root;
    if (words.length == 0) {
      return;
    }
    for (const word of words) {
      if (!node.child[word]) {
        node.child[word] = new TrieNode();
      }
      node = node.child[word];
    }
    node.wordEnd = true;
  }
  search(word){
    let node=this.root
    for (const words of word) {
        if(!node.child[words]){
            return false
        }
        node=node.child[words]
    }
    return node.wordEnd
  }
}
const trie=new Trie()
trie.insert("good")
trie.insert("girls")
trie.insert("gay")
trie.insert("bat")
trie.insert("ball")
console.log(trie.root);
console.log(trie.search('batt'));
