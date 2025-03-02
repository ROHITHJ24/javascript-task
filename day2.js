console.log("ODD or EVEN")
function OddOrEven(num){
    if(num %2 ==0){
        console.log("Even");
    }
    else{
        console.log("Odd");

    }
}
OddOrEven(4);
OddOrEven(9);

console.log("\n FIZZBUZZ program");

function fizzBuzz(){
    for(let i = 1 ; i <=10 ; i++)
    {
        if(i % 3 ==0 && i % 5 ==0){
            console.log("FIZZBUZZ");
        }
        else if(i % 3 == 0){
            console.log("Fizz")
            console.log("Fizz")
        }
        else if(i % 5 == 0){
            
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}
fizzBuzz();