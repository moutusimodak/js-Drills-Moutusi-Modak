const arrayOfObjects = require('./persons');
const {getEmail, getHobby, getNames} = require("./solution")

//q1
const emails = getEmail(arrayOfObjects);
 const emailList = emails.join('\n');
console.log(`The email address of all individuals are - ${emailList}`);

//q2

const hobby = getHobby(30);
console.log(`${hobby}`);

//q3

const nameList = getNames('India');
console.log(`The names  are  - ${nameList}`);
