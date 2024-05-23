//difine a function with a rest parameter that accept items argument representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy sandwich");
}
//call the function 3 times with 3 diffrent number od argument
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich(" bread", "butter");
console.log("bread", "butter", "chicken", "mayo", "tomato");
