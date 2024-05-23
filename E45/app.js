// define a  function to create a car object withh optinal options.....
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initilize a car object with manufacture and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //add addition options to the car object 
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// car the functions to create a car object
var my_car = create_car("Toyota", "corolla", "color:black", "sunroof: true");
//priint the variable to correctly in the car object
console.log(my_car);
