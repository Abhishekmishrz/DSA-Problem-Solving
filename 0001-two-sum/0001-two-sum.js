/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(number, target) {
         const arr =[]
    
    for(let i = 0; i < number.length ; i++){
        const need = target - number[i]
        if(need in arr){
            return [arr[need], i]
        }
        arr[number[i]] =i
    }
 }