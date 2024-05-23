//creating Array
var userNames = ["hiba", "rabi", "moiz", "Admin", "sufyan"];
//using foreach loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for loging in again."));
    }
});
