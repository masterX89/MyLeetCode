/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) { //hashTable中存在
            if (i - map.get(nums[i]) <= k) { // 差值小于k
                return true;
            }
        }
        // insert into hashTable
        map.set(nums[i],i);
    }
    return false;
}; // 84.85% 100.00%

var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) { //hashTable中存在
            if (i - map[nums[i]] <= k) { // 差值小于k
                return true;
            }
        }
        // insert into hashTable
        map[nums[i]] = i;
    }
    return false;
}; // 84.85%

console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));
/**
 * 思考：普通的object和map的区别
 * hasOwnProperty和has的区别
 **/