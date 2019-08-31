/**
 * @param {string} S
 * @return {number[]}
 */
 // 思路：把整个string返回肯定是每个char出现最多的
 // 但是有些char在字符串前半段出现后，再后半段就再也没有出现过，所以就可以在中间分开
 // 那么假设‘a’出现了，那么就要找到最后一个'a'出现的位置，把它加进来
 // 就是一边遍历string，然后去找当前char的最后出现位置，一定要包括那个最后的位置
 // 所以需要建立一个辅助数组last记录每一个char最后出现的位置
var partitionLabels = function(S) {
    let last = {},ans=[];
    for (let i = 0; i < S.length; i++) {
        last[S[i]] = i;
    }
    let anchor = 0, j = 0;
    for (let i = 0; i < S.length; i++) {
        j = Math.max(j,last[S[i]]);
        if (i === j) {
            ans.push(j-anchor+1);
            anchor = i+1;
        }
    }
    return ans;
}; //73.32%

console.log(partitionLabels('ababcbacadefegdehijhklija'));