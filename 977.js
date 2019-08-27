/**
 * @param {number[]} A
 * @return {number[]}
 */
 /**
  * 两种思路：
  * 1. 全部平方后排序
  * 2. 最接近0的数，双指针移动
  */
// var sortedSquares = function(A) {
//     let B =  A.map(num=>num*num).sort((a,b)=>a-b);
//     console.log(B);
// }; // 73.74%

var sortedSquares = function(A) {
    let res = [];
    let i = 0;
    while (i < A.length && A[i] < 0) {
        i++;
    }
    let j = i - 1;
    while (i < A.length && j >= 0) {
        if (Math.abs(A[i])<Math.abs(A[j])) {
            res.push(A[i]*A[i]);
            i++;
        } else {
            res.push(A[j]*A[j]);
            j--;
        }
    }
    while (i < A.length) {
        res.push(A[i]*A[i]);
        i++;
    }
    while (j >= 0) {
        res.push(A[j]*A[j]);
        j--;
    }
    console.log(res);
}; // 96.91%

sortedSquares([-1,0,1,2]);
