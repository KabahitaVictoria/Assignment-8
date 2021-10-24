let arr= ["a","b","c"];
console.log(arr.push("d")); //push; adding an item to the end of the array
console.log(arr);

console.log(arr.pop()); //pop; removing the last item of the array
console.log(arr);

let arr2=["d","e","f"];
console.log(arr.concat(arr2)); //concat; combining two arrays without affecting original array

console.log(arr.join("")); //combines all elements in the array but has no effect on original array
console.log(arr.join("="));

console.log(arr.reverse()); //reverses position of elements and HAS an effect on the original array
console.log(arr);

console.log(arr.shift()); //shift; removes the first element of the array
console.log(arr);

console.log(arr.unshift("c")); //unshift; adds a first element of the array
console.log(arr);

console.log(arr.slice(1,2)); /*slice; gives another array with element specified; 
                            uses indices eg 1(index of wanted element, remember counting starts from 0)
                            and 2(index of form n-1); has no effect on original array*/
console.log(arr);

arr.push("g");
arr.push("i");
console.log(arr.sort()); //sorts in logical order; HAS an effect on original array
console.log (arr);

console.log(arr.splice(2,2,"j")); /*splice; 3 arguments; eg 2, index you are beginning with to remove; 
                                    2, next element you are removing(start counting from the one you
                                        are removing); "j" is new element you are adding;
                                        HAS effect on original array*/
console.log(arr);




