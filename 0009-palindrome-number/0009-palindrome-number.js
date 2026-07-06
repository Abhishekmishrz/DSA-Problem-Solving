/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let temp = 0;
    let x = Math.abs(s)
    while(x>0){
        let d = x%10;
        temp = temp*10 + d
        x = Math.floor(x/10);
    }
    if(temp == s) return true
    return false
};