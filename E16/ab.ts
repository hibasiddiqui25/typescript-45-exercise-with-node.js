// creating a guest list array
let guestList = ["Hamza", "usman", "ayesha" , "areeba"];

// making variable for those guesst who can naot come
let dontCome = guestList[0];

// print the name of guest who cant come 
console.log(dontCome, "mh ayee ga");

// add or remove values form the guest list array 
guestList.splice(0, 1, "amir");

// message print for bigger table
console.log("Good News ! We have found a bigger table for dinner .");

//adding a new value at starting index of array
guestList.unshift ("ali");

//adding a new value at ending index of array
guestList.push("zain");

// adding a new value at middle index of array
let middleIndex :number = Math.floor (guestList.length / 2 );

//adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "osama");

//print message od updated list
console.log("updated list of our guest");

//sending a invitation message to our by one with their names
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));


