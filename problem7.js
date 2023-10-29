function printDetails(ob) {
    let object = ob;
    if (typeof object !== "object") {
        return "give an object";
    }
    else {
        let myName = object.name || "nai";
        let myAge = object.age || "nai";
        let myEmail = object.email || "nai";
        let myStatus = object.status || "nai";
        
        let myDetails = "amar nam " + myName + ", "  +"amar boyosh " + myAge + ", " +"amar email " + myEmail + ", " +"amar gf " + myStatus;
        return myDetails;
    }


    // console.log(object);
    // console.log(myName);
    // console.log(myAge);
    // console.log(myEmail);
    // console.log(myStatus);

    // let fullDetail = myName + ", " + myAge + ", " + myEmail + ", " + myStatus;
    // return fullDetail;
    // console.log(object);
}
const inputObject = {
    name: "Ashraful Islam Akash",
    age: 20,
    email: "abirashrafulislamabir@gmail.com",
    status: "",
};
const result = printDetails(inputObject);
console.log(result);