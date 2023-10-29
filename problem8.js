function isValidPhotoName(iName, iExtention) {
    
    if (typeof iName !== "string" || !Array.isArray(iExtention) == true) {
        return " enter a valid image name or extention";
    }
    
    else {
        // -----------------for of loop ----------------------
        
        // for(let item of iExtention){
        //     if(iName.toLowerCase().endsWith(item.toLowerCase())){
        //         return true;
        //     }
            
        // }
        // return false;






        // --------------for loop---------------------

        for (let i = 0; i < iExtention.length; i++) {
            let element = iExtention[i];
            
            if(iName.toLowerCase().endsWith(element.toLowerCase())){
                return true;
            }
            
            
        }
        return false;
    }

}
const imageName = "image.jpg";
const imageExtention = [".jpg", ".jpej", ".png", ".gif", ".ico"];
const result = isValidPhotoName(imageName, imageExtention);
console.log(result);