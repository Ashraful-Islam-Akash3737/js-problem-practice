// check if the number is integer or not and  make cube of this number
function isInteger(number){
    if(typeof number !== "number"){
        return "please enter an integer number "
    }
    else{
        if(number % 1 == 0){
            console.log("it's an integer number ")
            return Math.pow(number,3);
        }
        else{
            
            return "floot number is not allowed ";
        }
    }
}
const num = 5.86;
const result = isInteger(num);
console.log(result);
