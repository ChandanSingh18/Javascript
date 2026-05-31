const userEmail ="chandan@gmail.com"

if(userEmail){
    console.log("got user email");
}
else{
    console.log("user email not found");
}

//falsy values

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN 

// truthy values

// "0", " ", [], {}, function(){}, true, 1, -1, BigInt, 1n, Infinity, -Infinity, 'false'


// if(userEmail.length === 0){
//     console.log("User email is empty");
//     }

const emptyobj = {};

if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}

//nullish coalescing operator (??): null undefined

let val1;
val1 = 5??10
val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);

// terniary operator

// condition ? true : false 

const iceteaprice = 100;
iceteaprice <=80 ? console.log("less tthan 80"):console.log
("greater than 80");

