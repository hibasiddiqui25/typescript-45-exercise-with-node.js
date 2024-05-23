//creating Array
let userNames = ["hiba", "rabi", "moiz", "Admin", "sufyan"];

//using foreach loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, thank you for loging in again.`)
            }
})