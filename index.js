// useful string properties & methods
// this it is the length property
var myName = "Bikeri Ronald";
var myphone = "+254-759666-445"
var myCity = "Nowhere XY 12345";

console.log(myName.length);  // length property
console.log(myName.charAt(4));  //chracters in a string
console.log(myName.indexOf(" ")); // index of method
console.log(myName.lastIndexOf("o")); // lastindex of method
console.log(myName.trim()) // trim method gets off the white spaces 
console.log(myName.toUpperCase()) // it changes my string to uppercase
console.log(myName.toLowerCase()) // changes my string to lowercase


var firstName = myName.slice(0, myName.indexOf(" ")); //string slice
console.log(firstName);


var myphone = myphone.replaceAll("-",""); 
console.log(myphone);

/* var myStreet = "123 Fake st.";
var myCity = "Nowhere XY 12345";
var myPhone = "123-456-7890";

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf(" "));
console.log(myName.lastIndexOf("o"));
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//var firstName = myName.slice(0, 3);
var firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);

//var firstName = myName.slice(4);
var lastName = myName.slice(myName.lastIndexOf(" ") + 1);
console.log(lastName);

var myAddress = myStreet.concat(" ", myCity);
console.log(myAddress);

myPhone = myPhone.replaceAll("-","");
console.log(myPhone); */