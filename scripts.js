function telephoneCheck(str) {

let numsOnly = "";
let numsCount = 0;
let result = true;

let wholeSet = /^\d{3}-\d{3}-\d{4}|^\(\d{3}\)\d{3}-\d{4}$|(\d{3})\s*\d{3}-\d{4}|\d{3}\s\d{3}\s\d{4}|^\d{10}$/g;

numsOnly += str.match(/\d/g).join("")
numsCount += numsOnly.length;

if(numsCount === 10){
    if (wholeSet.test(str)){
        result = true;
    } else {
        result = false;
    }
} else if (numsCount === 11){
    let validPat = /^1\s*(\d{3}-\d{3}-\d{4}|\(\d{3}\)\s*\d{3}-\d{4}|\d{3}\s*\d{3}\s*\d{4}|\d{10})$/;
    if(validPat.test(str)){
        return true;
    } else {
        result = false;
    }
} else {
    result = false;
}
   return result;
}

console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("(555-555-5555"));
