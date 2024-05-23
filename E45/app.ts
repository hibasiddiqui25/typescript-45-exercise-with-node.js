// define a  function to create a car object withh optinal options.....
function create_car(manufacturer, model, ...options){
    //Initilize a car object with manufacture and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    //add addition options to the car object 
    options.forEach(options => {
        let [key, value] = options.split(":");
        car[key.trim()] = value.trim();

    });

    return car;
}

// car the functions to create a car object
let my_car = create_car("Toyota", "corolla", "color:black", "sunroof: true");

//priint the variable to correctly in the car object
console.log(my_car);
