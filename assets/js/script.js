


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
console.log(isdivided(num1));


function isdivided2(m){
    return num1%21 ==0?  true:console.log("The provided value is not number");;
}
