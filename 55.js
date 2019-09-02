/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 思路：寻找一条路径到最后一个元素
// 我可以使用bfs，但是感觉没必要，之后可以尝试写出来
// 用一个Array记录下每一个元素可以到达的最远的index
// 然后反过来去找能不能回到0
var canJump = function(nums) {
    let last = nums.map((num,index) => num + index);
    let target = nums.length-1;
    for (let i = nums.length-1; i >= 0; i--) {
        if (last[i] >= target) {
            target = i;
        }
    }
    return target === 0;
}; //99.29%

canJump([2,3,1,1,4]);
canJump([3,2,1,0,4]);

