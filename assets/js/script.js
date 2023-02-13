


// let num1 =(prompt());


// function isdivided (){
//     if(typeof(num1)){
//         if(num1%21 ==0){
//             return true
//         }
//     }
//     else{
//         console.log("The provided value is not number");
//     }
// }

// function isdivided2(m){
//     return num1%21 ==0?  true:console.log("The provided value is not number");;
// }


// console.log(isdivided2(num1));
// console.log(isdivided(num1));

// let numbers = [3,4,5,6,2,8,9,]
// let countNumber = 0

// function countEvenNumbers1(m){
//     for (let i = 0; i < numbers.length; i++) {
        
//         if(numbers[i]%2 ==0){
//             countNumber+=numbers[i]
//         }
//     }
//     return countNumber
// }

// console.log(countEvenNumbers1(numbers));





// function countEvenNumbers2(){
//     let countNumber2 = 0
//     let arr = Array.from(arguments);
//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i]%2 ==0){
//             countNumber2+=arr[i];
//         }        
//     }
//     return countNumber2;
// }
// console.log(countEvenNumbers2(1,2,7,9,30,45));


    function isP(m){
        
        let temp = m
        let newNumber = []
        let x = 0
        
        for (let i = 0; temp >=1; i++) {
            
            if(temp/10 > 0){
                temp /= 10
                x++;
            }   
        }
        // return x;

        newNumber.length = x;
        

        let myFunc = num => Number(num);
          
        var mArr = Array.from(String(m), myFunc);
          
        // Print the result array

        for (let i = mArr.length-1 ; i >=0; i--) {
            
            for (let j = 0; j < newNumber.length-1; j++) {

                newNumber[j] == mArr[i];
            }
        }

        console.log(newNumber);
        return newNumber == mArr? true:false;
        
    }



    let num = 123021;
let temp = num;
let numLength = 0;

while(temp >= 1) {
    numLength++;
    temp /= 10;
}


let arrNum = [], reversedNum = [];
arrNum.Length = reversedNum.Length = numLength;
let wholePortion = num;

for(let i = 0; i < numLength; i++){
    arrNum[numLength - i - 1] = wholePortion % 10;
    reversedNum[i] = wholePortion % 10;
    wholePortion = Math.trunc(wholePortion/10);
}

let check = true;
for(let i = 0; i < numLength; i++){
    if(arrNum[i] != reversedNum[i]){
        check = false;
        break;
    }
}

console.log((check == true) ? `${num} is a palindrome` : `${num} is not a palindrome`);









