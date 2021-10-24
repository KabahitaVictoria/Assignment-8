let stock = {
    Fruits: ["strawberries","grapes","bananas","apples"],
    Liquids: ["water","ice"],
    Holders: ["cone","cup","stick"],
    Toppings: ["chocolate","peanuts"],
};

let shop_open = true;
let order = (time,work)=>{
    new Promise((resolve,reject) =>{
        if (shop_open){
            setTimeout(()=>{
                resolve(work());
            },time);
        } else {reject(console.log("Sorry, our shop is closed"))
            };//for if statement
                                    }
        );// for promise function
}; // for order function
order(2000,()=>console.log(`${stock.Fruits[0]} was selected`));