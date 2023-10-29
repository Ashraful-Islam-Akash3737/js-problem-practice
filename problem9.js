function isPrime(arr){
    if(!Array.isArray(arr)){
        return "enter a valid array";
    }
    else{
        let primeNumber = [];
        for( let item of arr){
            if(item > 1){
                let isPrime = true; 
                for(let i = 2; i < item; i++){
                    if(item % i === 0){
                        isPrime = false;
                        break;
                    }
                   
                }
                if(isPrime == true){
                    primeNumber.push(item);
                }
            }
        }
        return primeNumber;
    }
}
const array = [ 49 ,45,77, 37, 28, 50, 70, 98];
const result = isPrime(array);
console.log(result);



// function isPrime(arr){
//     if(!Array.isArray(arr)){
//         return "enter a valid array";
//     }
//     let primeArray = [];
//     for( let i = 0; i < arr.length; i++){
//         let element = arr[i];
        
//         if(typeof element !== "number" || element <= 0){
//             return "enter positive number";
//         }
//         else{
//             if(element % 3 == 1 && element % 1 == 0 && element % element == 0){
//                 primeArray.push(element);
//             }
//             // return "no prime number found";
//         }
        
//     }
//     return primeArray;
// }
// const array = [ 1, 3, 5, 3, 8, 49 ,45, 59, 37, 50];
// const result = isPrime(array);
// console.log(result);