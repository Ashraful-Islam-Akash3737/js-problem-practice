// function isJavascriptFile(text){
//     if(typeof text !== "string"){
//         return "it's not a string";

//     }
//     // text.endsWith(".js") 
    
//     else{
//         if(text.endsWith(".js")){
//             return "it's a javascript file";
//         }
//         else{
//             return "it's not a javascript file";
//         }
//     }
// }
// const inputText = "index.js";
// const result = isJavascriptFile(inputText);
// console.log(result);



function isJavascriptFile(text){
    if(typeof text !== "string"){
        return "it's not a string";

    }
    
    
    else{
        const arr = text.split(".");
        const lastElement = arr.pop();


        return lastElement.toLowerCase() === "js";

        // if(lastElement.toLowerCase() === "js"){
        //     return "it's a javascript file";
        // }
        // else{
        //     return "it's not a javascript file";
        // }
    }
}
const inputText = "index.js";
const result = isJavascriptFile(inputText);
console.log(result);