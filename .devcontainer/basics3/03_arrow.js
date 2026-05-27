const user = {
    username : "Chandan",
    price: 1000,

    welcomeMessage : function() {
        console.log(`the price is ${user.price}  for our website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "singh";
user.welcomeMessage();