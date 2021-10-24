let myName = "Victoria";
let age = 18

function greetMe(){
    console.log(myName, age)
}
greetMe()

function greetMeDynamic(myName, age) {
    console.log(myName, age);
}
greetMeDynamic("Jisoo", 19)
greetMeDynamic("Lisa", 23)
greetMeDynamic("Rose", 25)
greetMeDynamic("Jennie", 21)
// functions that print my name and age, and that of four others (which makes it five, mine included)


let add= (x, y) =>  x+y;
console.log (add(3,5));
//arrow function having two local variables concatenated together

function whatIsMyAge(birthYear){
    let currentYear= new Date().getFullYear();//automatic update of current year
    if(birthYear && typeof birthYear =='number'){
        myAge= currentYear - birthYear;//algorithm
        return myAge;//return result of algorithm
    }
    return 0;
}

function displayAge(name,birthYear){
    let age= whatIsMyAge(birthYear);//redefining previous function
        message= "My name is " + name + " and my age is " + age;
    console.log(message);//showing in console
}
displayAge("Victoria",2002);//calling function

let numberLimit= 20;
for (let num = 1; num < numberLimit; num++) {
    const element = numberLimit[num];
    console.log("I love Uganda",num)   
}
//Loop that prints "I love Uganda" 19 times


