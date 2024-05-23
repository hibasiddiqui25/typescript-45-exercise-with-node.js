//Making a array of countries and print its orginal order
let countriesTovisit: string[] = ["china", "Denmark", "Brazil", "Argentina"];
console.log("orginal order:", countriesTovisit);

//print ythe array in alphabetical ordwer without modifying the actual array list
console.log("Alphabatical order:", [...countriesTovisit].sort());

//show that the array is still in its orginal order
console.log("still in orginal order:", countriesTovisit);

//print the array in reversed order without modifing  the actual array list
console.log("Revers order:", [...countriesTovisit].reverse());

//show that the array is still in its orginal order 
console.log("still is orginsl order:", countriesTovisit);

//we have change the orginal arrayorder now
console.log("orginal array reversed:", countriesTovisit.reverse());

//print the array to show that it's back to its orginal order
console.log("back to orginal order:", countriesTovisit.sort());

//print the array to show that its orderhas been change in alphabetical order now
console.log("sorted in alphabetical order:", countriesTovisit.sort());

//we have change again the orginal order now in alphabetical order
console.log("orginal array reversed:", countriesTovisit.reverse());






