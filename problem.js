// problem 1
// ত োমাকে cubeNumber() নামে একটা function দেওয়া হয়েছে । functionটা একটা input নাম্বার নিবে ।
// Task:
// 1. input নাম্বারটাকে cube করে result টা রিটার্ন করবে ফাংশন থেকে ।
// 2. Bonus: ইনপুট হিসেবে number টাইপ এর পরিবর্তে অন্য কিছু দিলে তুমি একটা মিন ংফুল মেসেজ রিটার্ন
// করে দিবে ফাংশন থেকে ।

function cubeNumber(number) {
    // const type = typeof(number);
    // console.log(type);
    if ( typeof number !== "number"){
        
        return("enter a number");
    }
    
    else{
        const cube = Math.pow(number,3);
        return cube;
    }
   

}
const input =100;
const inputValue = cubeNumber(input);
console.log(inputValue);

// 



// 
// function matchFinder(string1, string2){
//     let output1 = [];
    
//     for(let i = 0; i < string1.length; i++){
//         const element1 = string1[i];
//         output1.push(element1);
//     }
//     console.log(output1);

//     let output2 =[];
//     for(let i = 0; i < string2.length; i++){
//         const element2 = string2[i];
//         output2.push(element2);
//     }
//     console.log(output2);
//     if(string1.includes("ash") == string2 ){
//         return true;
//     }
//     else{
//         return false;
//     }
    
// }
// const string1 = "akash";
// const string2 = "akash";
// const twoString = matchFinder(string1, string2);
// console.log(twoString);






const array = [1,2];
console.log(array);
function sortMaker(arr) {
    // let output = [];
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        const element1 = arr[i+1];
        const element2 = element1 - [1];
        console.log(element2);
        // console.log(element);
        console.log(element1);

    } 
    // return output;
    // let arrResult = [];
    // for(let i = 0; i < arr.length; i++){
    //     const element = arr[i];
    //     if(element[i] > element[i+1] ){
    //         arrResult.push(element[i]);
    //     }
    // }
    // return arrResult;
}
const result = sortMaker(array);
console.log(result);