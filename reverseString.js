// how do you reverse a string with help of loops in javascript


function returnReverseString(str) {
    let name;
    for (let i = str.length - 1; i >= 0; i--) {
        name += str[i];
    }

    return name;
}

console.log(returnReverseString("karachi "));