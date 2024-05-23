// creating a array
function make_shirt (size: string = "Large", printMessage: string = "I love typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// calling a function 
make_shirt();

// calling a function now with medium size and default message
make_shirt("Medium")

// calling a function now with samll  size and also diffrent message
make_shirt("Small", "I love python")