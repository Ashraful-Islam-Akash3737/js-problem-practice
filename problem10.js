// recartion function
// input a number ...... then it will return the sum of 1 to number......

function recurtionWithSumOfNumber(num){
    if(num == 1){
        return 1;
    }
    else{
        return num + recurtionWithSumOfNumber(num-1);
    }
}
const number = 5;
const result = recurtionWithSumOfNumber(number);
console.log(result);