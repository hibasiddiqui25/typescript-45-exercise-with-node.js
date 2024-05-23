let userNames = ["hiba", "rabi", "moiz", "Admin", "sufyan"]

if(userNames.length === 0){
console.log("your array in empty we need to find some users!")
}else{
    //using foreach loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, thank you for loging in again.`)
            }
})
}