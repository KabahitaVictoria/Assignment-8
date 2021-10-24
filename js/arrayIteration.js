//ITERATION; Process of going through an array and doing something with its items.

//(1)forEach; lists out each item and respective index(position)
let arr=[1,2,3];
arr.forEach(function(item,index){
    console.log(item,index)
});

/*(2)map; takes item from array, performs a function, then puts something new back
            into the array*/
let tripled= arr.map(function(item){
    return item * 3; 
});
console.log(tripled); //expected output;[3,6,9]
console.log(arr);

/*(3)filter; takes an array, checks each item in the array and seta a condition 
                to see if it is true or false (if true, will put item back in array, 
                    if false, will not put item back in array)*/
let evens = arr.filter(function(item){
    return item % 2 === 0; //way to check for even numbers, if remainder given is 0
});
console.log(evens) //expected output;[2]

/*(4)reduce; takes an array, performs a function then passes the result to the next
                 iteration along with the next item in the array*/
let sum = arr.reduce(function(result,item){
    return result + item;
},0);
console.log(sum); //expected output 0+1+2+3 = 6

/*(5)some; checks if any item in the array meets a certain condition (result 
                either true or false)*/
let lessThan = arr.some(function(item){
    return item < 3;
})
console.log(lessThan);

/*(6)every; checks if ALL numbers meet the condition (result 
                either true or false) */
let allPositive = arr.every(function(item){
    return item > 0;
})
console.log(allPositive);

/*(7)find; goes through every item in the array and checks it against the 
                condition and if true, it returns that item*/
let objects =[{id: 'a'},{id: 'b'},{id: 'c'}];
let found = objects.find(function(item){
    return item.id ==='c';
});
console.log(found);

/*(8)find index; similar to find, but instead returns index of item */
let foundIndex = objects.findIndex(function(item){
    return item.id ==='c';
});
console.log(foundIndex);