// define a function tp print each magician name from an array

function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}

//function to make magicians great through .map() it will modify array  
function Make_great(magicians: string[]){
 return magicians.map(name => `The great ${name}`);

}
// define an array containing magicians name
let magicians_names = ["Harray poter", "Hiba", "alishba"]

let great_magicians = Make_great(magicians_names);

show_magicians(great_magicians)
