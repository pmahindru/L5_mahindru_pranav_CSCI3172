/*
    This is my own JS  
*/

// call the function when button will be click
document.getElementById("calculate").addEventListener('click', calculate);
function calculate(){

    // getting all the number as string and split by , 
    // store as Array and save as numberArray 
    const numberArray = document.getElementById("number").value.split(",");

    // saving the prime count, composite count and neither count to show in the p tag
    let primeCount = 0;
    let compositeCount = 0;
    let neitherCount = 0; 

    // using for each to get all the number from the array check if it prime or composite or neither
    numberArray.forEach(element => {

        // converting into number 
        element = Number(element);

        // base case number is 1 it is not prime or composite
        if(element == 1 || element == 0){
            console.log("--->  neither ----> " + element)
            neitherCount++;
        }
        else if(element == 2){
            console.log("---> prime ---> " + element)
            primeCount++;
        }
        else{
            // check the count how many times number is mod(i) 
            // if it is more 1 then it is composite other wise it is prime
            var count = 0;
            for(var i=2; i<=element; i++){
                if(element % i === 0){
                    count++;
                    if(count > 1){
                        console.log("---> composite ---> " + element)
                        compositeCount++;
                        break;
                    }
                }
            }
            if(count === 1){
                console.log("---> prime ---> " + element)
                primeCount++;
            }   
        }

    });

    // display the p tag where all the answers
    document.getElementById("showanswer").style.display = "block";

    // display the answer prime, composite, neither inside p using span tag 
    document.getElementById("prime").innerHTML = "Prime Number: " + primeCount;
    document.getElementById("composite").innerHTML = "Composite Number: " + compositeCount;
    document.getElementById("neither").innerHTML = "Neither: "  + neitherCount;
}