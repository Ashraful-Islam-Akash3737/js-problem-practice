function gemToDiamond(friend1, friend2, friend3) {
    if (typeof friend1 !== "number") {
        return "enter a number for friend1";
    }
    if (typeof friend2 !== "number") {
        return "enter a number for friend2";
    }
    if (typeof friend3 !== "number") {
        return "enter a number for friend3";
    }
    if(friend1 <= 0 || friend2 <= 0 || friend3 <= 0){
        return "please provide me a positive number";
    }
    if(friend1 % 2 !== 0 || friend2 % 2 !== 0 || friend3 % 2 !== 0){
        return "you can't provide me a float number";
    }
    else {
        const powerOfGem1 = 21;
        const powerOfGem2 = 32;
        const powerOfGem3 = 43;

        const powerOfFriend1 = powerOfGem1 * friend1;
        const powerOfFriend2 = powerOfGem2 * friend2;
        const powerOfFriend3 = powerOfGem3 * friend3;

        const totalDiamond = powerOfFriend1 + powerOfFriend2 + powerOfFriend3;
        if (totalDiamond > 2000) {
            return totalDiamond - 2000;
        }
        else {
            return totalDiamond;
        }
    }
}
const friend1 = 20;
const friend2 = 200;
const friend3 = 50;
const result = gemToDiamond(friend1, friend2, friend3);
console.log(result);