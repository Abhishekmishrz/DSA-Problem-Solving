/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(v) {
    let str = ''
    let sign = v>0? +1 : -1;
    let x = Math.abs(v).toString()
    for(let i = x.length -1; i>=0;i--){
        str+= x[i]
    }
    return Number(str) < Math.pow(2,31) ? Number(str) * sign : 0;
    
};