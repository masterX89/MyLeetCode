/**
 * @param {number[][]} A
 * @return {number}
 */
 // 翻转每一行，判断会不会增大
 // 翻转每一列，判断会不会增大
var matrixScore = function(A) {
    let ans = matrixSum(A);
    for (let i = 0; i < A.length; i++) {
        if (matrixSum(revertRow(A,i))>ans) {
            ans = matrixSum(revertRow(A,i));
            for (let j = 0; j < A[i].length; j++) {
               A[i][j] === 1 ? A[i][j] = 0 : A[i][j] = 1;
            }
        }
    }
    for (let j = 0; j < A[0].length; j++) {
        if (matrixSum(revertCol(A,j))>ans) {
            ans = matrixSum(revertCol(A,j));
            for (let i = 0; i < A.length; i++) {
                A[i][j] === 1 ? A[i][j] = 0 : A[i][j] = 1;
            }
        }
    }
    return ans;
};//7.22%

function revertRow(A,i) {
    // 无论数组还是obj均为深拷贝
    let B = JSON.parse(JSON.stringify(A));
    for (let j = 0; j < B[i].length; j++) {
        B[i][j] === 1 ? B[i][j] = 0 : B[i][j] = 1;
    }
    return B;
}

function revertCol(A,j) {
    let B = JSON.parse(JSON.stringify(A));
    for (let i = 0; i < B.length; i++) {
        B[i][j] === 1 ? B[i][j] = 0 : B[i][j] = 1;
    }
    return B;
}

function matrixSum(A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        let num = 0;
        for (let j = A[i].length-1; j >=0 ; j--) {
            if (A[i][j] === 1) {
                num += Math.pow(2,A[i].length-j-1);
            }
        }
        sum += num;
    }
    return sum;
}

console.log(matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]]))