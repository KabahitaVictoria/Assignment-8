/*ASYNCHRONOUS JS; allows one to break down a bigger project into smaller tasks;
                    and allows you to work independently on each task. */
 
/*(1)uses setTimeout function(Built-in function of JS which allows you to run a
    function after a specific time)   eg */
// console.log("I");
// console.log("eat icecream");
// console.log("with a");

// setTimeout(() => {
//     console.log("spoon");
// },1000); sets output of "spoon after 1000ms or 1s"

// (2)Callback; calling a function inside another function, forms a connection
//                     between functions
// let order = (call_production) => {
//     console.log("Order placed, please start production");
//     call_production();
// };
// let production = () => {
//     console.log("Order received, starting production");
// };
// order(production);

//(3)integrating arrays, objects, setTimeout function and callbacks
let stock = {
    Fruits: ["strawberries","grapes","bananas","apples"],
    Liquids: ["water","ice"],
    Holders: ["cone","cup","stick"],
    Toppings: ["chocolate","peanuts"],
};

/*(4)Promises; save us from callback hell; makes code neater*/
let is_shop_open = true;
// let order3 = (time,work) =>{                    1) Relationship between time and work
//     return new Promise( (resolve, reject)=>{
//         if (is_shop_open){
//             setTimeout(()=>{
//                 resolve(work());
//             },time);
//         } else {
//             reject(console.log("Sorry, shop is closed"));
//         };
//     } );
// };
// order3(2000,()=>console.log(`${stock.Fruits[0]} was selected`))
    
//     .then(()=>{                                                     2)Promise chaining
//     return order3(0000, ()=>console.log("Production has started."))    
//     })
//     .then(()=>{
//         return order3(2000,()=>console.log("The fruit has been chopped."))
//     })
//     .then(()=>{
//         return order3(1000,()=>{
//             console.log(`${stock.Liquids[0]} and ${stock.Liquids[1]} have been added.`)
//         })
//     })
//     .then(()=>{
//         return order3(1000,()=>console.log("The machine has been started."))
//     })
//     .then(()=>{
//         return order3(2000,()=>{
//             console.log(`Icecream placed on ${stock.Holders[0]}`)
//         })
//     })
//     .then(()=>{
//         return order3(3000, ()=>{
//             console.log(`${stock.Toppings[0]} was selected.`);
//         })
//     })
//     .then(()=>{
//         return order3(2000, ()=>console.log("Icecream was served."))
//     })

//     .catch(()=>console.log("Customer has left.")) 3)Error catching; eg if shop_closed= false

//     .finally(()=>console.log("Day ended, shop is closed.")
//     )                     4) the .finally handler; will run whether promise is resolved or rejected.

/*5)Async/Await; better way to write promises. */
function time(ms) {
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        } else {
            reject(console.log("Sorry, shop is closed."))
        }
    })
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stock.Fruits[0]} has been selected`)

        await time(0000)
        console.log("Start production")

        await time(2000)
        console.log("Cut the fruit")

        await time(1000)
        console.log(`${stock.Liquids[0]} and ${stock.Liquids[1]} have been added`);

        await time(1000)
        console.log("Start the machine")

        await time(2000)
        console.log(`Icecream placed on ${stock.Holders[0]}`)

        await time(3000)
        console.log(`${stock.Toppings[0]} has been selected.`);

        await time(2000)
        console.log("Serve Icecream.");

    }
    catch(error){
        console.log("Customer left", error);
    }
    finally{
        console.log("Day ended, shop closed.");
    }
}

kitchen()








// CALLBACK HELL; let order2 = (Fruit_name, call_production) => {
//     setTimeout(()=>{
//         console.log(`${stock.Fruits[Fruit_name]} was selected`);
//         call_production();
//     },2000)
// };
// let production2 = () => {
//     setTimeout(()=>{
//         console.log("production has started");
        
//         setTimeout(()=>{
//             console.log("the fruit has been chopped");
    
//             setTimeout(()=>{
//                 console.log(`${stock.Liquids[0]} and ${stock.Liquids[1]} have been added`);

//                 setTimeout(()=>{
//                     console.log("Machine has been started");

//                     setTimeout(()=>{
//                         console.log(`Icecream was placed on a ${stock.Holders[0]}`);

//                         setTimeout(()=>{
//                             console.log(`Icecream topping chosen: ${stock.Toppings[0]}`);

//                             setTimeout(()=>{
//                                 console.log("Serve icecream");
//                             },2000)
//                         },3000);
//                     },2000);
//                 },1000);
//             },1000);
//         },2000);
//     }, 0000);
// };   //callback hell
// order2(0,production2); 