//OBJECTS; are containers for named values called properties.

//Defining an Objest
//1) let user = new Object(); or
let userInfo = {
    firstName: 'Victoria', //labels are also called keys and the user info are called values
    lastName: 'Kabahita',
    // gender: 'Female',
    profession: 'Code Queen',
    hobbies: ['Sleeping','Food','Reading'],
    nationality: {
        city: 'Kampala',
        country:'Uganda',     //object within an object
    }
}

//accessing data from an object
//1) Using the dot notation .
console.log(userInfo.firstName);
console.log(userInfo.hobbies[2]);
console.log(userInfo.nationality.country)

console.log('============');

//2) Using the subscripting method []
console.log(userInfo['lastName']);
console.log(userInfo['hobbies'][0]);
console.log(userInfo['nationality']['city']);

// adding data to an object
userInfo.languagesSpoken = ['English'];
userInfo['gender'] = 'Female';
console.log(userInfo);

//making a copy of an object
let userInfo2= Object.assign({},userInfo);

userInfo2.firstName = 'Vicky';
userInfo2.profession = 'Software Engineer';
console.log(userInfo2);

// let empty = {}
// console.log(empty.name);
// console.log(Object.keys(empty));
// console.log(Object.keys(userInfo));

//how to safely access data in an object
let objKeys = Object.keys(userInfo);
if (objKeys.includes('lastName')){
    console.log(userInfo.lastName);
} else {
    console.log('Nothing to see here');
} //1)how to check if a key exists

let objVals = Object.values(userInfo);
console.log(objVals);

console.log(userInfo.firstName); //2)can also return; but a value
console.log("============");

//looping over an object
for (let item in userInfo){
    console.log(item); //loops over keys
}
console.log("============");
for (let item in userInfo){
    console.log(userInfo[`${item}`]); //loops over values [dynamic]
}

