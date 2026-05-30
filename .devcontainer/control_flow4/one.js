//if
const temperature = 60;

 // code to execute if condition is true
if (temperature<=50) {
    // console.log("low temperature");
}
    else{
        // console.log("high temperature");
    }
   
// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`);


// const balance = 1000;

// if (balance > 500) console.log("you are rich");


// const balance = 1000

// if(balance <500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1300");
// }

const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromemail = true;

if(userloggedIn && debitCard || loggedInFromGoogle || loggedInFromemail){
    console.log("allow user to make purchase");
}