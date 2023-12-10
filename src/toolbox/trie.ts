import TrieNode from "./trie-node";

export default class Trie {
    root: TrieNode;
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word: string) {
      let node = this.root;
  
      for (const char of word.toString()) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
  
      node.isEndOfWord = true;
    }
  
    searchPartial(prefix: string) {
      let node = this.root;
      const result: string[] = [];
  
      for (const char of prefix.toString()) {
        if (node.children.has(char)) {
          node = node.children.get(char);
        } else {
          return result;  // No matching prefixes found
        }
      }
  
      // Collect all words with the given prefix
      this.collectWords(node, prefix, result);
  
      return result;
    }
  
    collectWords(node: TrieNode, currentPrefix: string, result: string[]) {
      if (node.isEndOfWord) {
        result.push(currentPrefix);
      }
  
      for (const [char, childNode] of node.children) {
        this.collectWords(childNode, currentPrefix + char, result);
      }
    }
  }