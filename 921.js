/**
 * @param {string} S
 * @return {number}
 */
// 思路：完成括号匹配，在stack中剩下的即为需要添加的
var minAddToMakeValid = function(S) {
    let stack = [];
    for (let ch of S) {
        if (stack[stack.length - 1] === '(' && ch === ')') {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return stack.length;
}; //75.45%

console.log(minAddToMakeValid('()))(('));