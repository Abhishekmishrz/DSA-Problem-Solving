/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let ans = 0;
    let i = 1;
    while( i * i <= x ){
        ans = i;
        i++;
    }
    return ans;
};