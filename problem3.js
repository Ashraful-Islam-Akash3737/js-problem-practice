function mindGame(number){
    if(typeof number !== "number"){
        return "please enter a valid number";
    }
    else if(number == 0){
        return "enter a positive integer number except 0";
    }
    else{
        if(number > 0){
            let total1 = number * 3;
            let total2 = total1 + 10;
            let total3 = total2 / 2;
            let total4 = total3 - 5;
            return total4;
        }
        else{
            return "enter a positive integer number";
        }
    }
}
const inputNumber = 5;
const result = mindGame(inputNumber);
console.log(result);