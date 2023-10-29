function isLgSeven(number){
    let permanentValue = 7;
    if(typeof permanentValue === "number"){
        let totalValue = number - permanentValue;
        if(totalValue < 7){
            return  totalValue;
        }
        else{
            return number * 2;
        }
    }
    else{
        return " enter a number";
    }
}
const inputNumber = -15;
const result = isLgSeven(inputNumber);
console.log(result);