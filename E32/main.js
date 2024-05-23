// array of current users
var current_users = ["hiba", "rai", "moiz", "sufyan"];
//array of new users
var new_users = ["Ali", "muskan", "fasi", "Hiba"];
//loop through new_users to check for usernames avainility
new_users.forEach(function (new_one_users) {
    // making a condition for user name is already exist and save in our_confition variable
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    // print diffrent message using if else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log(" This username ".concat(new_one_users, " is available"));
    }
});
