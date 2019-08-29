/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let start = 0;
    let end = A.length - 1;
    let mid = parseInt((start+end)/2);
    while (A[mid-1]>A[mid] || A[mid+1]>A[mid]) {
        if (A[mid-1]>A[mid]) {
            end = mid;
            mid = parseInt((start+end)/2);
        }
        if (A[mid+1]>A[mid]) {
            start = mid;
            mid = parseInt((start+end)/2);
        }
    }
    return mid;
}; //95.02%

console.log(peakIndexInMountainArray([0,2,3,4,5,6,7,1,0]));