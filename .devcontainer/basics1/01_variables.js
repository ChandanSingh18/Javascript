const accountID = 12345678
let accountEmail = "chandan@gmail.com"
var accountPassword = "1234"

accountCity = "Delhi"

// accountID = 2 not allowed

accountEmail = "h@gmail.com"
accountPassword = "6789"
accountCity = "Bihar"

console.table([accountEmail, accountID, accountPassword, accountCity])

/*
prefer nt to use var 
because of issue in block scope and functional scope
*/