//define variables
let apple  = "apple";
let upperCaseApple =  "APPLE";
let ten =10;
let twenty =20;
let fruits =["apple", "banana", "orange"];
let array  

//test for equality and inequality with string
console.log("\nIs apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

//test using lowerCase function
console.log("Is APPLE is equal to after converting to lowerCase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowerCase?");
console.log( upperCaseApple.toLowerCase()!= "apple");

//numerical tests
//equal to
console.log("\nIs ten is eqal to twenty?");
console.log(ten == twenty);

//not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// greater then
console.log("\nIs ten greater then zero?");
console.log(ten > 0);

// less then
console.log("\nIs twenty is less then 10?");
console.log(twenty < 10);

//greater then ar equal to 
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >=  5);

//less then or equal to
console.log("\n twenty is less then or eqal to 10");
console.log(twenty <= 10);

// testing using "and" & "or" operator
//using &&(and)
console.log("\n twenty is not equal to ten and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 30);

//using || ( or)
console.log("\n twenty is greater then 50 or twenty is equals to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater then 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20 );

// test whether an item is included in array 
console.log("\nIs orange include my fruits array");
console.log(fruits.includes ("orange"));

// not include
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange"));

 

