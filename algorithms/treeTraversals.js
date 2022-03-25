function preorderTraverse(node, array) {
    if (!node) return array;
    array.push(node.value);
    array = preorderTraverse(node.left, array);
    array = preorderTraverse(node.right, array);
    return array;
}

function inorderTraverse(node, array) {
    if (!node) return array;
    array = inorderTraverse(node.left, array);
    array.push(node.value);
    array = inorderTraverse(node.right, array);
    return array;
}

function postorderTraverse(node, array) {
    if (!node) return array;
    array = postorderTraverse(node.left, array);
    array = postorderTraverse(node.right, array);
    array.push(node.value);
    return array;
}

function breadthFirstTraverseRecursive(queue, array) {
    if (!queue.length) return array;
    const node = queue.shift();
    array.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    return breadthFirstTraverse(queue, array);
}

function breadthFirstTraverse(queue, array) {
    while (queue.length) {
        const node = queue.shift();
        array.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return array;
}

const tree = {
    value: 8,
    left: {
        value: 4,
        left: {
            value: 3,
            left: {
                value: 2,
                left: null,
                right: null,
            },
            right: null,
        },
        right: {
            value: 5,
            left: null,
            right: {
                value: 7,
                left: {
                    value: 6,
                    left: null,
                    right: null,
                },
            },
        },
    },
    right: {
        value: 12,
        left: {
            value: 10,
            left: {
                value: 9,
                left: null,
                right: null,
            },
            right: {
                value: 11,
            left: null,
            right: null,
        },
    },
},
};

console.log('preorderTraverse', preorderTraverse(tree, []));
console.log('inorderTraverse', inorderTraverse(tree, []));
console.log('postorderTraverse', postorderTraverse(tree, []));
console.log('breathFirstTraverseRecursive', breadthFirstTraverseRecursive([tree], []));
console.log("breadthFirstTraverse", breadthFirstTraverse([tree], []));