// array of current users
let current_users =["hiba", "rai", "moiz","sufyan"]

//array of new users
let new_users = ["Ali", "muskan", "fasi", "Hiba"]

//loop through new_users to check for usernames avainility
new_users.forEach(new_one_users => {
  
    // making a condition for user name is already exist and save in our_confition variable
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase())
 
    // print diffrent message using if else statement
    if(our_condition){
        console.log(`Sorry ${new_one_users} is already taken!`)
    }else{
        console.log(` This username ${new_one_users} is available`)
    }
})