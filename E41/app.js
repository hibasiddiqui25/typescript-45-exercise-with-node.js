// define a function tp print each magician name from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians name
var magicians_names = ["Harray poter", "Hiba", "alishba"];
// call the function to print each magicians name
show_magicians(magicians_names);
