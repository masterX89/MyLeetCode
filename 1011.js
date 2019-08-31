/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let left = Math.max(...weights);
    let right = weights.reduce((accu,cur)=>accu+cur);
    // 最小值即D=weight.length,最大值D=1
    while (left < right) {
        let mid = parseInt((left+right)/2),need = 1,cur = 0;
        for (let i = 0; i < weights.length; i++) {
            if (cur+weights[i]>mid) {
                need++;
                cur = 0;
            }
            cur += weights[i];
        }
        if (need > D) { // 切多了，放大
            left = mid+1; // 是否一定要+1？【一定要加1】
        } else {
            right = mid;
        }
    }
    return left;
};//75.56%

console.log(shipWithinDays([3,2,2,4,1,4],3));