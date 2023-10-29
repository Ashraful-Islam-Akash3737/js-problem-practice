function findingBadData(arr) {
    let container = [];
    if (!Array.isArray(arr) == true) {
        return "enter the number of array";
    }
    else {


        // -----------------for loop---------------------------
        // for(let i = 0; i < arr.length; i++){
        //     const element = arr[i];
        //     if( typeof element !== "number"){
        //         return "enter the number of array"
        //     }
        //     else{
        //         if(element < 0){
        //             container.push(element);

        //         }
        //     }

        // }

        // ------------------for of loop--------------------
        for (let element of arr) {
            if (typeof element !== "number") {
                return "enter the number of array"
            }
            else {
                if (element < 0) {
                    container.push(element);

                }
            }
        }
    }
    const containerLength = container.length;
    return containerLength;
}
const inputNumber = [2, -5, -7, -13];
const result = findingBadData(inputNumber);
console.log(result);