let guestList = ["ramo kaka", "lal pari", "laila"];

let dontCome = guestList[0];

console.log(dontCome, "mh ayee ga");

guestList.splice(0, 1, "ramaish");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));
