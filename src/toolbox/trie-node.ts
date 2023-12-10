export default class TrieNode {

    children: Map <string, TrieNode>;

    isEndOfWord;

    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
}