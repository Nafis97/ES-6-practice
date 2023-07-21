// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function(num){
//     return num*2;
// }

const doubleIt = num => num*2; // arrow function
const add = (num1, num2) => num1 + num2;
const bigFunc = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum* diff;
    return result;
}
const give5 = () => 5;


const result = doubleIt(50);
const total = add(50,70);
const result2 = bigFunc(7, 5);



console.log(result);
console.log(total);
console.log(result2);