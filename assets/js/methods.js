function isDivisible(num){
    return num%21 ==0;
};

function isPrimary(num1, num2){
    return (num1%2==0 && num2%2==0)? num1+num2:false;
}

let result = isdivisible(42)
console.log(result);


let result2 = isPrimary(4,6)
console.log((result2));
