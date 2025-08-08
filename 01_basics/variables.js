const accountId = 1806;
let accountEmail = "songarekapil@gmail.com";
var accountPassword = "18062006";
accountcity = "Jaipur";
let accountState;

// accountId = 2323; // not allowed bcz we've used const 
/* Prefer not to use var because of issue in block scope and functional scope
*/
accountEmail = "hc@hc.com";
accountPassword = "1111";
accountcity = "Banglore";

console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);