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
var great_magicians = Make_great(magicians_names);
show_magicians(great_magicians);
