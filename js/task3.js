//Task 3
"use strict";

const createMatrix = (size) => {

    //Initialize matrix.
    let matrix = new Array(size);

    for (let i = 0; i < size; i++) {
        matrix[i] = new Array(size).fill(0);
    }

    //First triangle.
    for (let i = 0; i <= Math.trunc(size / 2); i++) {
        for (let j = i; j < size - i; j++) {
            matrix[i][j] = 1;
        }
    }
    //Second triangle.
    for (let i = Math.trunc(size / 2); i < size; ++i) {
        for (let j = i; j >= size - i - 1; --j) {
            matrix[i][j] = 1;
        }
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === j) { //First diagonal.
                matrix[i][j] = 2
            }
            if (i + j === size - 1) { //Second diagonal.
                matrix[i][j] = 2
            }
        }
    }

    return matrix;
}