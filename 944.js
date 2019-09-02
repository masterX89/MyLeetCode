/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let ans = 0;
    for (let j = 0; j < A[0].length; j++) {
        for (let i = 0; i < A.length-1; i++) {
            if (A[i][j]>A[i+1][j]) {
                ++ans;
                break;
            }
        }
    }
    return ans;
}; // 100.00%

console.log(minDeletionSize(["zyx","wvu","tsr"]));