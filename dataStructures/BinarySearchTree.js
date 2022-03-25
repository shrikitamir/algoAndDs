class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const node = new Node(value);
        if (this.root == null) {
            this.root = node;
        } else {
            let leaf = this.root;
              while (leaf != node) {
                if (node.value > leaf.value) {
                    if (leaf.left) {
                        leaf = leaf.left;
                    } else {
                        leaf.left = node;
                    }
                } else {
                    if (leaf.right) {
                      leaf = leaf.right;
                    } else {
                      leaf.right = node;
                    }
                }
              }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new Tree();

console.log(tree.add(5))
console.log(tree.add(2))
console.log(tree.add(1))
console.log(tree.add(8))
console.log(tree.add(19))
console.log(tree.add(3))
console.log(tree.root);
