/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(num) {
    let set = new Set();
    while(num!==1){
        let temp =0;
        if(set.has(num)) return false
        set.add(num);
        while(num>0){
            let d = num%10;
            temp = temp + (d*d)
            num = Math.floor(num/10);
        }
        num = temp
    }
    return true;
};