//extracts a sections of a string and returns it as a new string without modifying the original string.

 let fullName = "Bikeri ronald";
 let firstName;
 let lastName;

 lastName = fullName.slice(7);
 firstName = fullName.slice(0, 7);

 console.log(lastName);
 console.log(firstName);
  