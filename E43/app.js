// define a function tp print each magician name from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will modify array  
function Make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// define an array containing magicians name
var magicians_names = ["Harray poter", "Hiba", "alishba"];
// making a copy of orignal array throgh .slice() function
var copy_magician_names = magicians_names.slice();
// modify the copied array to include "the great" with there names
var copy_great_magicians = Make_great(copy_magician_names);
//show both array originals and copied
//originals
console.log("Original array\n");
show_magicians(magicians_names);
//copied
console.log("\ncopied array");
show_magicians(copy_great_magicians);
