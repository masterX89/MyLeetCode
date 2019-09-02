/**
 * @param {string} seq
 * @return {number[]}
 */
// 思路：首先这个是肯定括号匹配的，就是说右括号肯定是匹配一个左括号的，使用stack的话肯定可以pop
// 那么把左括号分两组，尽量平衡即可
// 不去管右括号，把左括号按奇偶分组
// 注意：当pop出去之后，左括号的sum是要改变的
var maxDepthAfterSplit = function(seq) {
    let stack = [], leftSum = 0, ans = [];
    for (let ch of seq) {
        if (ch === '(') { // 左
            if (leftSum % 2 === 0) { // A组
                stack.push(0);
                ans.push(0);
            } else { // B组
                stack.push(1);
                ans.push(1);
            }
            leftSum++;
        } else { // 右
            ans.push(stack.pop());
            // 左括号的计数一定要变
            // 样例："(()())" 
            // 不减的话就会是A组：(()) depth = 2,B组：() depth = 1
            // 正确答案是A组：() depth = 1,B组：()() depth = 1
            leftSum--;
        }
    }
    return ans;
}; //83.33% 

console.log(maxDepthAfterSplit("(()())"));