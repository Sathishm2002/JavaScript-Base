let userInput = "  sathish | SATHISHRONALDO2345@gmail.com | JavaScript developer and Coffee Enthusiast. I love JavaScript" 



//--------------------------------------SPLIT()-----------------------------------
//--------------split() is used to splite the content from the user by giveing (any character or symbols)
let parts = userInput.split("|")
console.log(parts);




//--------------------------------------TRIM()------------------------------------
//-------------trim() is used to remove extrace sapce form the user the information
let Name = parts[0].trim()
let email = parts[1].trim()
let bio = parts[2].trim()

console.log(Name);
console.log(email);
console.log(bio);




//--------------------------------toUpperCase()------------------------------
//-----toUpperCase() is used to convert the user information to upperCase
Name = Name.toUpperCase()
console.log(Name);




//--------------------------------toLowerCase()------------------------------
//-----toLowerCase() is used to convert the user information to lowerCase
email = email.toLowerCase()
console.log(email);




//--------------------------------includes()---------------------------------
//-----includes() is used to check that the word is pressent or not from the user informations
console.log(bio);
let likesJS=bio.includes("JavaScript")
let likesPY = bio.includes("python");
console.log(likesJS);
console.log(likesPY);




//---------------------indexOf()------------------------------------------
//-------indexOf() is used to find the position of a character from the user informations
console.log(bio.indexOf("JavaScript"));
//--------------------LastIndexOf()---------------------------------------
//---------lastIndexOf() is used to find the last position of a character from the user informations
console.log(bio.lastIndexOf("JavaScript"));




//-----------------------------replace()-------------------------------------
//--------replace() is used to replace a arguments from the user information
//------------it take two arguments, one is what we want to modify and other is set the value
bio = bio.replace("JavaScript","JS")
console.log(bio);

//-----------------------------replaceAll()-------------------------------------
//------------it take two arguments, one is what we want to modify and other is set the value
//----------replaceAll() is used to replace  all the character from the user informations
bio = bio.replaceAll("JavaScript","JS")
console.log(bio);




//-------------------------------slice()------------------------------------------
//---defalut sllice give u a entire string  
console.log(bio.slice());

//-------------------------------slice(4)--------------------------------------
//---slice(4) it remove 0th 1st 2nd 3rd position in the string
console.log(bio.slice(4));

//-------------------------------slice(0,13)---------------------------------
//---slice(0,13) is use to get the particular position of the character
console.log(bio.slice(0, bio.indexOf("and")));
//-----------------------------trim() is used to remove extra spaceses
console.log(bio.slice(0, bio.indexOf("and")).trim());




//---------------------------------splice(2,3)------------------------------------------
//--splice(2,3)-- is used to remove the particulat character from the user information
//--we can also see the deleted character by storing it in one variable
const weeks  = ['sun','Mon','Tue','Wed','Thurs','Fri','Sat']

//-----------------------------splice(2,3,6,7)--------------------------------------
//---splice(2,3,6,7)-- is used to insert the new value in the array--------
//--first argument represent starting position or value--------------------------------
//--second argument represent how many position or character we want to delete---------
//--third argument represent how many character we want to insert----------
const deleted = weeks.splice(2,3,6,7)

console.log(weeks);
console.log(deleted);




//-----------------------------charAt()---------------------------------------
//----charAt() is used to get a particular character or a word from the user information
let name  = Name.charAt(3)
console.log(name);


//---------------------------concat()---------------------------------------------
let programming = ['Angular','React']
console.log(programming);
let UpdateProgram = programming.concat(['Next.js','Vue.js'])
console.log(UpdateProgram);






//-----------------length---------------------------------------------------
//----length is used to find the length of the string
console.log(bio.length);



//------------------------------endsWith()---------------------------------------
//---endsWith()  is used to find the information is present or not in the end of the statement.
let validedEmail = email.includes("@") && email.endsWith(".com")
console.log(validedEmail);

let seprator = "-".repeat(100)

let finalProfile = `
User Profile:
${seprator}
Name        :  ${Name.trim()}
email       :  ${email.trim()}
Profession  :  ${bio.trim()}
${seprator}
`;
console.log(finalProfile);
