// creating a function with parameters which return a value in string
function City_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
// calling a function and print the returned value 
console.log(City_country("Karachi", "Palistn"));
City_country("tokyo", "Japan");
console.log(City_country("tokoyo", "japan"));
console.log(City_country("berlin", "german"));
