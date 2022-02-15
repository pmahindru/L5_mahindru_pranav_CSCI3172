/*
    This is my own JS  
*/

// saving the prime count, composite count and neither count to show inside the div tag using span tag to answers
// global variable so that i can access in all functions
var primeCount = 0;
var compositeCount = 0;
var neitherCount = 0; 

// call the function when button will be click
document.getElementById("calculate").addEventListener('click', calculate);
function calculate(e){
    e.preventDefault();

    // getting all the number as string and split by "," 
    // store in Array and save in numberArray variable
    const numberArray = document.getElementById("number").value.split(",");

    console.log("----------------------------------FOR EACH-----------------------------------------");

    // using for each to get all the number from the array check if it prime or composite or neither
    numberArray.forEach(element => {
        helperToFindNumber(element);
    });

    // show the div tag
    document.getElementById("showanswer_foreach").style.display = "block";

    // display the answer prime, composite, neither using span tag 
    document.getElementById("prime_foreach").innerHTML = "Prime Number: " + primeCount;
    document.getElementById("composite_foreach").innerHTML = "Composite Number: " + compositeCount;
    document.getElementById("neither_foreach").innerHTML = "Neither: "  + neitherCount;

    // reset the count equal to zero so that it will count again for the other like for-loop or MAP or for-each
    number();

    console.log("----------------------------------FOR LOOP-----------------------------------------");

    // using for loop to get all the number from the array check if it prime or composite or neither
    for(var i=0; i<=numberArray.length-1; i++){
        helperToFindNumber(numberArray[i]);
    }

    // show the div tag
    document.getElementById("showanswer_forloop").style.display = "block";

    // display the answer prime, composite, neither using span tag 
    document.getElementById("prime_forloop").innerHTML = "Prime Number: " + primeCount;
    document.getElementById("composite_forloop").innerHTML = "Composite Number: " + compositeCount;
    document.getElementById("neither_forloop").innerHTML = "Neither: "  + neitherCount;

    // reset the count equal to zero so that it will count again for the other like for-loop or MAP or for-each
    number();

    console.log("----------------------------------MAP-----------------------------------------");

    // using for loop to get all the number from the array check if it prime or composite or neither
    numberArray.map(element =>{
        helperToFindNumber(element);
    });
    
    // show the div tag
    document.getElementById("showanswer_map").style.display = "block";

    // display the answer prime, composite, neither using span tag 
    document.getElementById("prime_map").innerHTML = "Prime Number: " + primeCount;
    document.getElementById("composite_map").innerHTML = "Composite Number: " + compositeCount;
    document.getElementById("neither_map").innerHTML = "Neither: "  + neitherCount;

    // reset the count equal to zero so that it will count again for the other like for-loop or MAP or for-each
    number();
}

// this is used to find the prime number composite number or it may be neither (HELPER METHOD)
function helperToFindNumber(element){
    // converting into number 
    element = Number(element);

    // base case number is 1 and 0 it is not prime or composite and if number is 2 it is a prime 
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
}

// numbers for the prime count/ composite count / neither count (HELPER METHOD)
function number(){
    // assign zero so that it can re count for the FOR LOOP / FOR EACH / MAP
    primeCount = 0;
    compositeCount = 0;
    neitherCount = 0;
}