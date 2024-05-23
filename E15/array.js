var guestList = ["ramo kaka", "lal pari", "laila"];
var dontCome = guestList[0];
console.log(dontCome, "mh ayee ga");
guestList.splice(0, 1, "ramaish");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
