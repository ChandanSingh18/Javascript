const user = {
    username : "Chandan",
    price: 1000,

    welcomeMessage : function() {
        // console.log(`the price is ${user.price}  for our website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "singh";
// user.welcomeMessage();

//console.log(this);

// function welcome(){
//     let username = "hitesh"
//     console.log(username);
// }
// welcome()

// const chai = () => {
//      let username = "hitesh"
//      console.log(this);
// }
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2; //explicit return
// }
// console.log(addtwo(4,5));

// const addtwo = (num1, num2) => (num1*num2);// implicit return
// console.log(addtwo(6,6));

const addtwo = (num1, num2) => ({username : "chandan",})
console.log(addtwo(4, 5));