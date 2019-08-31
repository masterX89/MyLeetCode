/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    // H = len,max(...piles)
    // H = max,1
    let left = 1, right = Math.max(...piles);
    while (left < right) {
        // init 
        let mid = parseInt((left+right)/2),need = 0;
        for (let i = 0; i < piles.length; i++) { // 可优化写法
            if (piles[i] % mid === 0) { // 可优化
                need += parseInt(piles[i]/mid);
            } else {
                need += parseInt(piles[i]/mid) + 1;
            }
        }
        if (need > H) { // 可优化
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};//28.33%

// For each pile of size p > 0, we can deduce that Koko finishes it in Math.ceil(p / K) = ((p-1) / K) + 1 hours

// 别人的80%的答案
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  const largest = Math.max(...piles);
  if (piles.length === H) return largest;

  // Binary search between 1 and largest
  let lo = 1;
  let hi = largest;
  let i = Math.floor((lo + hi) / 2);
  while (lo < hi) {
    let time = 0; // Find the time needed
    for (let t of piles) {
      if (i >= t) {
        time++;
      } else {
        time += Math.ceil(t / i);
      }
      if (time > H) {
        // During the loop, if the time is already larger then H,
        // then the speed is too low, so we need to increase the lower bound
        // And we can terminate the loop
        lo = i + 1;
        i = Math.floor((lo + hi) / 2);
        break;
      }
    }
    // After the loop the time is still smaller or equals to H,
    // then the speed is too high, we can reduce the speed by decreasing the higher bound
    if (time <= H) {
      hi = i; // Notice here: compare it with hi = i - 1;
      i = Math.floor((lo + hi) / 2);
    }
  }
  return lo;
}; // 80%

console.log(minEatingSpeed([30,11,23,4,20],6));