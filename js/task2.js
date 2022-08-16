//Task 2
"use strict";

const initialTree = {
    left: {
        left: {
            left: 1,
            right: {
                left: 0,
                right: 1,
            },
        },
        right: {
            left: 0,
            right: 1,
        },
    },
    right: 0,
}

const traverseTree = (tree) => {
    if (tree != null) {
        if (typeof (tree.left) === "number") {
            tree.left === 0 ? tree.left = 1 : tree.left = 0;
        }

        if (typeof (tree.right) === "number") {
            tree.right === 0 ? tree.right = 1 : tree.right = 0;
        }

        traverseTree(tree.left);
        traverseTree(tree.right);
    }
}
