


let num1 =(prompt());


function isdivided (){
    if(typeof(num1)){
        if(num1%21 ==0){
            return true
        }
    }
    else{
        console.log("The provided value is not number");
    }
}

function isdivided2(m){
    return num1%21 ==0?  true:console.log("The provided value is not number");;
}



let numbers = [3,4,5,6,2,8,9,]
let countNumber = 0

function countEvenNumbers1(m){
    for (let i = 0; i < numbers.length; i++) {
        
        if(numbers[i]%2 ==0){
            countNumber+=numbers[i]
        }
    }
    return countNumber
}

console.log(countEvenNumbers1(numbers));





function countEvenNumbers2(){
    let countNumber2 = 0
    let arr = Array.from(arguments);
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]%2 ==0){
            countNumber2+=arr[i];
        }        
    }
    return countNumber2;
}
console.log(countEvenNumbers2(1,2,7,9,30,45));





console.log(isdivided2(num1));
console.log(isdivided(num1));



