function isDivisible(num){
    return num%21 ==0;
};

function isEvenCount(num1, num2){
    return (num1%2==0 && num2%2==0)? num1+num2:false;
}

// let result = isDivisible(42)
// console.log(result);


// let result2 = isEvenCount(4,6)
// console.log((result2));

console.log(isDivisible(42));
console.log(isEvenCount(3,5));


